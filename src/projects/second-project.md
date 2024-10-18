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
  export let finite;
    const projectImages = [
        "/media/images/banner.png"
    ]

    console.log(finite)

    console.log("Project iamges from .md file: ",projectImages)
</script>

<Gallery slug={'second-project'} />
