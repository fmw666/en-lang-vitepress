# 听力练习

## 文章结构

如果是视频，需要给出视频链接，以及嵌入视频播放器到文章中，并且需要提取出音频。

音频需要嵌入到文章中。

## 如何写文章

### 推荐链接

* https://www.youtube.com/@GCFLearnFree/videos

* https://space.bilibili.com/454750818

### 工具

* youtube to mp3 tools: https://wave.video/zh/convert/youtube-to-mp3-145
* (Highly recommend) mp3/mp4 file storage and convert to txt: https://mwrfxz4d70m.feishu.cn/minutes/me
* (Need to pay) youtube to text and split the vedio: https://maestra.ai/zh/tools/video-to-text/youtube-transcript-generator

## 视频嵌入

### Bilibili

```html
<iframe src="//player.bilibili.com/player.html?aid=375588815&bvid=BV1so4y1m7U5&cid=339262048&page=1&high_quality=1&danmaku=0&autoplay=0" allowfullscreen="true" width="100%" height="500" scrolling="no" frameborder="0" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
```

```
&high_quality=1（1=最高画质 0=最低画质）
&danmaku=0（1=打开弹幕 0=关闭弹幕）
&autoplay=0（1=自动播放 0=禁止自动播放）
sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"（禁止弹出网页）
```

### Youtube

```html
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
</iframe>
```

```
Add playlist=videoID and loop=1 to let your video loop forever.
loop=0 (default) - The video will play only once.
loop=1 - The video will loop (forever).
Add mute=1 after autoplay=1 to let your video start playing automatically (but muted).
```

## Prompts

::: details 通过原文生成导读
```xml
<instruction>
    <description>
        You are tasked with creating a high-quality prompt template for generating an introduction (导读) to an English article. The purpose of this introduction is to help readers understand the content of the article and guide them in thinking about key points before reading the full text.
        
        The introductions should be concise, typically no more than five per article, and each one should be written in English. Your goal is to provide clear instructions for another AI on how to generate these introductions based on a given input of an English article.
    </description>
    
    <examples>
        <example>
            Input: "The article discusses the impact of social media on mental health, focusing particularly on teenagers."
            
            Output:
            * Introduction 1: This article explores the relationship between social media and mental health, with a special emphasis on its effects on teenagers.
            * Introduction 2: Key points to consider include the prevalence of social media use among young people and potential psychological impacts.
        </example>
        
        <example>
            Input: "This piece examines the evolution of artificial intelligence technology over the past decade."
            
            Output:
            * Introduction 1: The article traces the development of AI technology from its early stages to recent advancements.
            * Introduction 2: It highlights significant milestones and their implications for future technological progress.
        </example>
        
        <example>
            Input: "The author analyzes the economic benefits and challenges faced by small businesses in urban areas."
            
            Output:
            * Introduction 1: This article delves into the financial landscape of small businesses operating in city environments, discussing both opportunities and obstacles.
            * Introduction 2: Key factors influencing their success are explored, including market competition and government policies.
        </example>
    </examples>
    
    <instructions>
        Step-by-step guide to creating introductions for an English article:
        
        1. Read the provided input text carefully to understand its main points and overall theme.
        2. Identify key topics or themes that should be highlighted in the introduction.
        3. Craft concise, clear sentences in English that summarize these key points.
        4. Ensure each introduction is no more than one sentence long.
        5. Aim for a total of between 1 and 5 introductions per article, depending on its complexity.
        6. Avoid using any XML tags or other markup languages in your output.
    </instructions>
</instruction>
```
:::
