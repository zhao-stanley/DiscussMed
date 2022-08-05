export const getRoleColor = (role) => {
  const founder = 'from-yellow-600 to-yellow-400'
  const webmaster = 'from-[#0F3443] to-[#34E89E]'
  const research = 'from-blue-800 to-blue-400'
  const content = 'from-purple-800 to-purple-400'
  const outreach = 'from-red-800 to-red-400'
  if (role === 'founder') {
    return founder
  } else if (role === 'web') {
    return webmaster
  } else if (role === 'research') {
    return research
  } else if (role === 'content') {
    return content
  } else {
    return outreach
  }
}
