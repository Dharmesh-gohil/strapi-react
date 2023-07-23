import { FaTimes } from "react-icons/fa"
import sublinks from "./data"
import { useGlobalContext } from "./Context"

const Sidebar = () => {
  const { closeSidebar,isSidebarOpen} =useGlobalContext()
  return (
    <aside className={ isSidebarOpen?"sidebar show-sidebar":"sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-links">
        {sublinks.map((item) => { 
          const { links, page, pageId } =item
          return <article key={pageId}>
            <h4>{page}</h4>
            <div className="sidebar-sublinks">
              {links.map((link) => {
                // console.log(link)
                const {id,label,icon,url }=link
                return <a key={id} href="{url}">{icon} { label}</a>
                
              })}
            </div>
          </article>
        })}
      </div>
    </aside>
  )
}
export default Sidebar