function Footer(){

  const date = new Date()
  return (
    <footer>
      <p>copyright in {date.getFullYear()}</p>
    </footer>
  )
}

export default Footer
