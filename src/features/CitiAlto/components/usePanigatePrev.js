import { useEffect, useState } from 'react'
import { NewsService } from '../../../app/Services/CitiAlto'

const usePanigatePrev = ( props ) => {
    const [newsDetailsPrev, setNewsDetailsPrev] = useState(null)
    useEffect(() => {
      setNewsDetailsPrev(NewsService.news.find((tintuc) => tintuc.id === props))
    }, [props])
  return newsDetailsPrev
}

export default usePanigatePrev