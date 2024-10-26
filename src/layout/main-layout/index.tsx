import Sidebar from '~/components/sidebar'
import { findPermissionByCode } from '~/lib/permission'
import { useSelector } from 'react-redux'
import routers from '~/routers'
import Box from '@mui/material/Box'
import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RootState } from '~/store'
import Header from '~/components/header'

const loadComponent = (componentPath: string) => {
  return lazy(() => import(`~/${componentPath}`))
}

export default function MainLayout() {
  const { permissions } = useSelector((state: RootState) => state)
  const routesPermission = routers
    .filter((item) => {
      const p = findPermissionByCode(item.pagePermission, permissions)
      return Boolean(p && p.url)
    })
    .map((item) => {
      const p = findPermissionByCode(item.pagePermission, permissions)
      return {
        path: p?.url,
        componentPath: item.componentPath,
        pageTitle: p?.pageTitle ?? ''
      }
    })

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col grow'>
        {/* <Header /> */}
        <Suspense fallback={<>Loading</>}>
          <Routes>
            {routesPermission.map((route) => {
              const Component = loadComponent(route.componentPath)
              return <Route key={route.componentPath} path={route.path} element={<Component />} />
            })}
            <Route path='*' element={<div className='w-32 h-40 bg-neutral-bg-1-rest'>404</div>} />
          </Routes>
        </Suspense>
      </div>
    </div>
    // <Box
    //   sx={{ display: 'flex', overflow: 'hidden', backgroundColor: '#f7f7f9' }}
    // >
    //   <Sidebar />
    //   <Box
    //     component='main'
    //     sx={{
    //       flex: 1,
    //       display: 'flex',
    //       flexDirection: 'column',
    //       overflow: 'hidden',
    //       height: '100vh',
    //     }}
    //   >
    //     <Header />
    //     <Box
    //       sx={{
    //         flex: 1,
    //         overflowY: 'auto',
    //         overflowX: 'hidden',
    //         padding: '24px !important',
    //         height: '100vh',
    //       }}
    //     >
    //       <Suspense fallback={<>Loading</>}>
    //         <Routes>
    //           {routesPermission.map((route) => {
    //             const Component = loadComponent(route.componentPath);
    //             return (
    //               <Route
    //                 key={route.componentPath}
    //                 path={route.path}
    //                 element={<Component />}
    //               />
    //             );
    //           })}
    //           <Route path='*' element={<div className='w-32 h-40 bg-neutral-bg-1-rest'>404</div>} />
    //         </Routes>
    //       </Suspense>
    //       {/* <div>Footer</div> */}
    //     </Box>
    //   </Box>
    // </Box>
  )
}
