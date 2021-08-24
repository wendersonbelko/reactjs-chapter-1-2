interface ContentProps {
  title: string;
}

export function Content({ title }: ContentProps) {
  return (
    <header>
    <span className="category">
      Categoria:<span> {title}</span>
    </span>
  </header>
  )
}