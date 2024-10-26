const routers: RouteProps[] = [];
export interface RouteProps {
  /**
   * 	Quyền hiển thị trang
   */
  pagePermission: string;
  /**
   * 	Đường dẫn tuyệt đối đến page
   */
  componentPath: string;
}
export default routers;
