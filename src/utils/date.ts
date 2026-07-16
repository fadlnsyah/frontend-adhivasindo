const contentDateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})

export function formatContentDate(value: string) {
  return contentDateFormatter.format(new Date(value))
}
