export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <p>&copy; <a href="https://simontirant.dev/" target="_blank" rel="noreferrer">Simon Tirant</a> ${currentYear}</p>
    </footer>
  )
}