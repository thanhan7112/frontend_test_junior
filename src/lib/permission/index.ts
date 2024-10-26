import { PermissionItemProps } from '~/modal/permission';

const findPermission = (
  key: keyof PermissionItemProps,
  value: string | number,
  permissions?: PermissionItemProps[],
): PermissionItemProps | undefined => {
  let result: PermissionItemProps | undefined = undefined;

  const item = permissions?.find((item) => item[key] === value);
  if (item) {
    result = item;
  } else {
    permissions?.some((item) => {
      result = findPermission(key, value, item.children) || result;
      return result !== undefined;
    });
  }

  return result;
};

export const findPermissionByCode = (
  permissionValue: string,
  permissions?: PermissionItemProps[],
) => {
  return findPermission('permission', permissionValue, permissions);
};

export const findPermissionByUrl = (
  url: string,
  permissions?: PermissionItemProps[],
) => {
  return findPermission('url', url, permissions);
};
