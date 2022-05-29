import { useEffect, useState } from 'react'
import { NewsService } from '../../../app/Services/CitiAlto'

const usePanigateNext = ( props ) => {
    const [newsDetailsNext, setNewsDetailsNext] = useState(null)
    useEffect(() => {
      setNewsDetailsNext(NewsService.news.find((tintuc) => tintuc.id === props))
    }, [props])
  return newsDetailsNext
}

export default usePanigateNext