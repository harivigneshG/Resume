import React, { useState } from 'react';

const githubAvatar = 'https://github.com/harivigneshG.png?size=640';

const ProfileImage = ({ className = '', alt = 'Harivignesh G' }) => {
    const [source, setSource] = useState(githubAvatar);

    return (
        <img
            src={source}
            alt={alt}
            onError={() => setSource('/profile-fallback.svg')}
            className={className}
            loading="eager"
            decoding="async"
        />
    );
};

export default ProfileImage;
