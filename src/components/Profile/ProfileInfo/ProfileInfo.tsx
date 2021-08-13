import React from "react";
import s from './ProfileInfo.module.css';
import profileImage from '../../../source/user_img.jpg';
interface forContacts {
    [key : string]:string
}

const ProfileInfo = (props: any) => {
    let contacts : forContacts = !props.profile ? null : props.profile.contacts;
    let showContacts = [];

    for(let key in contacts){
        if(contacts[key] != null) showContacts.push(contacts[key]);
    }

    showContacts = showContacts.map(contact => <li><a target='_blank' href={contact} onClick={(e)=>{
        e.preventDefault();
        props.linkUrl(contact);
    }}>{contact}</a></li>);


    return (
        !props.profile ? null :
            <div className={s.profileInfo}>
                <div className={s.wrapper}>
                    <div className={s.profileInfoPhoto}>
                        <img
                            src={!props.profile ? null : !props.profile.photos.large ? profileImage : props.profile.photos.large}/>
                    </div>
                    <div>
                        <h3 className={s.fullName}>{props.profile.fullName}</h3>
                        <p className={s.aboutMe}>{(!props.profile.aboutMe ? 'Пусто' : props.profile.aboutMe)}</p>

                        {props.profile.lookingForAJob ?
                            <p className={s.job}>{'Поиск работы: ' + props.profile.lookingForAJobDescription}</p> : null
                        }

                            {
                                showContacts.length === 0 ? null :
                                    <div className={s.contacts}>
                                        <h4>Контакты:</h4>
                                        <ul>{showContacts}</ul>
                                    </div>
                            }

                    </div>
                </div>
            </div>
    );
};


export default ProfileInfo;