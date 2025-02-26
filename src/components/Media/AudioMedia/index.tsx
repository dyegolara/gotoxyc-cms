'use client'

import { cn } from '@/utilities/ui'
import React, { useRef } from 'react'

import type { Props as MediaProps } from '../types'

import { getClientSideURL } from '@/utilities/getURL'

export const AudioMedia: React.FC<MediaProps> = (props) => {
  const { onClick, resource, audioClassName } = props

  const audioRef = useRef<HTMLAudioElement>(null)

  if (resource && typeof resource === 'object') {
    const { filename } = resource

    return (
      <audio className={cn(audioClassName)} onClick={onClick} controls ref={audioRef} autoPlay>
        <source src={`${getClientSideURL()}/api/media/file/${filename}`} />
        Your browser does not support the audio element.
      </audio>
    )
  }

  return null
}
