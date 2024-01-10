import sytles from "./menuLink.module.css";

const MenuLink = ({item}) =>{
    return(
        <Link href={item.path} className={sytles.container}>
            <div className={sytles.menu}>
                {item.icon}
                {item.title}
            </div>
        </Link>
    )
};

export default MenuLink;