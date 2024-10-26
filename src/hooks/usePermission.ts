import { PermissionItemProps } from '~/modal/permission';
import { RootState } from '~/store';
import { parse } from 'qs';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  findPermissionByUrl as pFindPermissionByUrl,
  findPermissionByCode as pFindPermissionByCode,
} from '~/lib/permission';

export interface UsePermissionProps {
  activeKey: string | undefined;
  findPermissionByCode: (
    permissionContext: string,
  ) => PermissionItemProps | undefined;
  findPermissionById: (permissionId: number) => PermissionItemProps | undefined;
  findPermissionByUrl: (url: string) => PermissionItemProps | undefined;
  pagePermission: PermissionItemProps | undefined;
  name?: string;
  allowAccess: boolean;
  currentPermission?: PermissionItemProps;
  permissionMap: Map<number, PermissionItemProps>;
  parentPermission: PermissionItemProps[];
  findPermissionByMapID: (
    permissionId: number,
  ) => PermissionItemProps | undefined;
}

export const createPermissionMap = (
  permissions: PermissionItemProps[],
): Map<number, PermissionItemProps> => {
  const map = new Map<number, PermissionItemProps>();
  const stack: PermissionItemProps[] = [...permissions];

  while (stack.length > 0) {
    const item = stack.pop()!;
    map.set(item.id, item);
    if (item.children.length > 0) {
      stack.push(...item.children);
    }
  }

  return map;
};

export const findParentPermission = (
  permissions: PermissionItemProps[],
  targetId?: number,
): PermissionItemProps[] => {
  if (!targetId) return [];

  const permissionMap = createPermissionMap(permissions);
  const parents: Set<number> = new Set();

  const findParentIds = (id: number) => {
    for (const item of permissionMap.values()) {
      if (item.children.some((child) => child.id === id)) {
        parents.add(item.id);
        findParentIds(item.id);
      }
    }
  };

  findParentIds(targetId);
  const result = Array.from(parents)
    .map((parentId) => permissionMap.get(parentId))
    .filter(Boolean)
    .reverse() as PermissionItemProps[];
  const targetPermission = permissionMap.get(targetId);
  if (targetPermission) {
    result.push(targetPermission);
  }
  return result;
};

export const findChildPermissions = (
  permissions: PermissionItemProps[],
  parentId?: number,
): PermissionItemProps[] => {
  if (!parentId) return [];

  const permissionMap = createPermissionMap(permissions);
  const result: PermissionItemProps[] = [];

  const findChildren = (id: number) => {
    for (const item of permissionMap.values()) {
      if (item.id === id) {
        // Thêm đối tượng cha vào mảng
        result.push(item);

        // Thêm tất cả các đối tượng con vào mảng
        item.children.forEach((child) => {
          result.push(child);
          // Tiếp tục tìm sâu hơn
          findChildren(child.id);
        });
      }
    }
  };

  findChildren(parentId);
  return result;
};

const usePermission = (): UsePermissionProps => {
  const location = useLocation();
  const permissions = useSelector((state: RootState) => state.permissions);
  const qs = parse(location.search, { ignoreQueryPrefix: true });
  const p = qs.p as string | undefined;
  const pID = p && !isNaN(parseInt(p, 0)) ? parseInt(p, 0) : undefined;
  const pagePermission = pFindPermissionByUrl(location.pathname, permissions);

  const permissionMap = createPermissionMap(permissions);

  const permission = pID ? permissionMap.get(pID) : pagePermission;

  const name = permission?.pageTitle;

  const findPermissionByMapID = (id: number) => {
    return permissionMap.get(id);
  };

  const findPermissionByCode = (
    permissionCode: string,
  ): PermissionItemProps | undefined => {
    return pFindPermissionByCode(permissionCode, permissions) as
      | PermissionItemProps
      | undefined;
  };

  const findPermissionById = (
    permissionId: number,
  ): PermissionItemProps | undefined => {
    return permissionMap.get(permissionId);
  };

  const findPermissionByUrl = (
    url: string,
  ): PermissionItemProps | undefined => {
    return pFindPermissionByUrl(url, permissions) as
      | PermissionItemProps
      | undefined;
  };

  return {
    permissionMap: createPermissionMap(permissions),
    parentPermission: findParentPermission(permissions, pID),
    currentPermission: permission,
    activeKey: permission?.permission,
    findPermissionByCode,
    findPermissionById,
    findPermissionByUrl,
    pagePermission: pagePermission,
    findPermissionByMapID,
    name,
    allowAccess: Boolean(permission),
  };
};

export default usePermission;
