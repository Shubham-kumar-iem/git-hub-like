import Search from '../components/Search'
import SortRepos from '../components/SortRepos'
import ProfileInfo from '../components/ProfileInfo'
import Repos from '../components/Repos'
import Spinner from '../components/Spinner'
import { useState } from 'react'

const HomePage = () => {
  const [userprofile, setuserProfile] = useState(null);
  
  return (
    <div className='m-4'>
      <Search/>
      <SortRepos/>
      <div className='flex gap-4 flex-col lg:flex-row justify-center items-center'>
        <ProfileInfo/>
        <Repos/>
        <Spinner/>
      </div>
    </div>
  )
}

export default HomePage