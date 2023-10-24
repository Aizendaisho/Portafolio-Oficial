import React from 'react'

interface SingleProyectProps {
  name: string;

}

function ProyectsComponents() {
  return (
    <div className="p-4">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg font-medium  mb-3">The 400 Blows</h1>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Tecnologys</h2>
            <div className="tec flex gap-2">
              <span className='px-2 py-1 bg-gray-200 rounded-md text-black'>html</span>
              <span className='px-2 py-1 bg-gray-200 rounded-md text-black'>CSS</span>

            </div>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
  )
}

export default ProyectsComponents