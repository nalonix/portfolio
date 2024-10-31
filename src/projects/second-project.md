---
banner: '/second-project/media/images/banner.jpg'
title: Second Project
description: Second post descripttion
date: '2023-04-27'
tags:
  - NEXT
  - SUPABASE
published: true
---

## Markdown

### Another header

Hey second one 👋

<script>
  import Gallery from '../lib/components/Gallery.svelte'
  import VideoPlayer from '../lib/components/VideoPlayer.svelte'
  export let finite;
    const projectImages = [
        "/media/images/banner.png"
    ]

    console.log(finite)

    console.log("Project iamges from .md file: ",projectImages)
</script>

## Gallery

here are some nice looking screenshoots from the **projects**
<Gallery slug={'second-project'} />

## Video

this video is a demonstration of the features and working flow of the second project.
<VideoPlayer src={'https://youtu.be/TljF3iwWyJA'} title={'Second Project Video'} thumbnails={projectImages[0]} />
