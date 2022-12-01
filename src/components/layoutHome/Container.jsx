import styles from './Container.module.css'

function Container(props) {

    // Container geral que engloba todo o site //

    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container;