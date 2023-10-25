import { FaLinkedin, FaGithub } from 'react-icons/fa';

function ContactChapter() {
  return (
    <ul className="flex flex-col justify-start">
      <li className="flex">
        <h3>Email</h3>
        <p className="mt-4 ml-2">
          <a href="mailto:avprocopio@gmail.com">avprocopio@gmail.com</a>
        </p>
      </li>
      <li className="flex">
        <h3>Sociais</h3>
        <div className="mt-4 ml-2 flex gap-2">
          <a href="https://www.linkedin.com/in/arthur-proc" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/arthurproc" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </li>
    </ul>
  );
}

export default ContactChapter;