import React from 'react'

function RecentItems({topic}) {
  return (
    <div className='sidebar__recentItems'>
             <span className='sidebarHash'>#</span>
             <p>{topic}</p>
        </div>
  )
}

export default RecentItems