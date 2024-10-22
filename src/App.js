import { useRef, useState } from 'react'

export default function VideoPlayer() {
  const [play,setPlay] = useState("Başlat ")
  const ref = useRef()

  console.log(ref.current)
const handleClickPause = ()=>{
  if (ref.current) {
    ref.current.pause();
    setPlay("Duraklatıldı")
  }

}
const handleClickPlay=()=>{
  if (ref.current) {
    ref.current.play();
    setPlay("Oynatılıyor")
  }

}
  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 ref={ref} className='text-center font-bold text-3xl'>
        Video Oynatıcı
      </h1>
      <video
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
        ref={ref}
        controls
      />
      <div className='flex justify-between'>
        <button  onClick={handleClickPause} className='text-orange-500 font-semibold'>Duraklat</button>
       <div>{play && play }</div>

        <button onClick={handleClickPlay} className='text-indigo-500 font-semibold'>Oynat</button>
      </div>
    </div>
  )
}
