import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const Hero = () =>{
 const theme = useContext(ThemeContext)[0]
 const currentTheme = AppTheme[theme]

 return(
     <div style={{
         padding: "1rem",
         backgroundColor: '${currentTheme.backgroundColor}',
         color: '${currenttheme.textColor}',
         textAlign: "center",

     }}>
         <h1>Context API theme toggler</h1>
         <p>Change the theme</p>
         <button style={{
             backgroundColor: "#26ae60",
             padding: "10px 15px",
             fontSize: "20px",
             color: "#FFF",
             border: '${currentTheme.border}'
         }}></button>
     </div>
 )

}

export default Hero;