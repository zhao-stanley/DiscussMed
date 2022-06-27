const submitForm = (values) => {
  const { fname, lname, subject, emailBody } = values
  console.log(fname.length)
  console.log(lname.length)
  console.log(subject.length)
  console.log(emailBody.length)
  if (fname.length == 0 || lname.length == 0 || subject.length == 0 || emailBody.length < 10)
    return null

  const body = encodeURI(`${emailBody}\n\nFrom,\n${fname} ${lname}`)

  const emailLink = `mailto:discussmed1@gmail.com?subject=${subject}&body=${body}`

  let newWin = window.open(emailLink, '_blank')

  if (!newWin || newWin.closed || typeof newWin.closed == 'undefined') {
    return (window.location = emailLink)
  }
}

export default submitForm
