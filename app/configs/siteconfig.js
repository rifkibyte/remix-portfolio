import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Rifki. All Rights Reserved.`,

  author: {
    name: 'Rifki',
    accounts: [
      {
        url: 'https://github.com/rifkiandriyanto',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />,
      },
      {
        url: 'https://dev.to/rifkiandriyanto',
        label: 'Dev Account',
        type: 'gray',
        icon: <FaDev />,
      },
      {
        url: 'https://www.linkedin.com/in/andriyantorifki/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />,
      },
      {
        url: 'mailto:andriyantorifki53@gmail.com',
        label: 'Mail Rifki',
        type: 'gray',
        icon: <FiMail />,
      },
    ],
  },
};

export default siteConfig;
