interface FormattedDateProps {
  date: Date
  className?: string
}

export function FormattedDate({ date, className }: FormattedDateProps) {
  return (
    <time dateTime={date.toISOString()} className={className}>
      {date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  )
}
