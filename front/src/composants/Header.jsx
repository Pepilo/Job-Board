import { NavLink } from "react-router-dom";
import banniere_site from "../images_jb/banniere_mainpage.webp";
import loupe from "../images_jb/loupe.png";

const nb_annonces = 536016;

export function Header({connected, affSearch}) {
    return (
        <>
            <div id = "flex_header">
                <NavLink to={"/"} ><h1 id = "jb_name">O'Boulot</h1></NavLink>
                {!connected ?
                    <div id = "flex_login">
                        <NavLink to={"/login"}><p id="login">Se Connecter</p></NavLink>
                        <NavLink to={"/middle"}><p id = "inscription">Créer un compte</p></NavLink>
                    </div> :
                    <p></p>
                }
            </div>
            <img src = {banniere_site} id = "img_header"/>
            <p id = "acceuil">{nb_annonces} offres d'emplois disponibles</p>            
            {affSearch ?
                <form id = "flex_header_form">
                    <input type = "text" placeholder = "Poste" id = "searchbar_left"/>
                    <input type = "text" placeholder = "Ville, département, région" id = "searchbar_right"/>
                    <a href = "http://localhost:5176/recherche"><input type = "image" src = {loupe} id = "searchbar_search" alt = "Submit"/></a>
                </form> :
                <p></p>
            }
        </>
    )
}