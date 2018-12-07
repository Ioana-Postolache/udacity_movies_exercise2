import React, { Component } from 'react'


class FavouriteMovies extends Component{
  render(){
    console.log('props',this.props)
    const {profiles, users, movies} =this.props
    return(
      
      Object.values(movies).map(movie=>
{const usersFavouriteMovies= profiles.filter(profile=>Number(profile.favoriteMovieID)===movie.id)
return (<div>   
<h2>{movie.name}</h2>  
<p>Liked By:</p>
{
usersFavouriteMovies.length===0? <p>None of the users liked the movie</p>:
<ul> {usersFavouriteMovies.map(profile=>
{const userName = users[profile.userID].name;
return (<li key={profile.userID}>{userName}</li>)})}
</ul>  }
</div>)
}) )
   
    

  }
}

export default FavouriteMovies