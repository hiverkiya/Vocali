const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen min-w-screen flex-col h-fullitems-center justify-center">
      {children}
    </div>
  )
}
export default Layout
