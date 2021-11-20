import classes from "./Card.module.scss";

const Card = ({ name, role, img, text, onChange }) => {
    return (
        <div className={classes.Card}>
            <div className={classes.image}>
                <img src={img} alt={name} />

                <div className={classes.button}>
                    <button onClick={onChange}>
                        <img src="/images/icon-prev.svg" alt="" />
                    </button>

                    <button onClick={onChange}>
                        <img src="/images/icon-next.svg" alt="" />
                    </button>
                </div>
            </div>

            <div className={classes.data}>
                <p className={classes.para}>{text}</p>

                <div className={classes.user}>
                    <h2>{name}</h2>
                    <p>{role}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
