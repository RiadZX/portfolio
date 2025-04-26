"use client"
import Giscus from "@giscus/react";

export default function Comments() {
    return (
        <Giscus
          id="comments"
          repo="Riadzx/portfolio"
          repoId="R_kgDON936EA"
          category="Announcements"
          categoryId="DIC_kwDON936EM4CpfVd"
          mapping="specific"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      );
}