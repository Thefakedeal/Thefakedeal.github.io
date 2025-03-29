"use client"

import { useEffect, useState } from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from "react-share"


type Props = {
    title: string,
    tags?: Array<string>,
}

export default function ShareLinks({tags=[], title}: Props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);  
  },[])
  const hashTags = tags.map(tag=> `#${tag}`).join(' ')
  return (
    <div className="flex gap-2" id="share-links">
        <FacebookShareButton url={url}  hashtag={hashTags}  >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title} >
            <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title} source={url} >
            <LinkedinIcon size={32} round />
        </LinkedinShareButton>
    </div>
  )
}