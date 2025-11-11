export type Size = 'L' | 'M' | 'S' //specify the project's importance

export type Project = {
    title: string,
    image: string,
    technologies: string[],
    description: string,
    tag: string,
    demo?: string,
    github?: string,
    size: Size
}