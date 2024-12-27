import { Link } from '@nextui-org/react';

export default function index() {
  const features = [
    'Server-side rendering',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Cloudflare - Deployment',
    'Prettier - Code formatter',
    'Eslint Flat Config - Code linting tool',
    'Husky & Lint Staged - Run scripts on your staged files before they are committed',
    'NextUI - UI components',
  ];
  return (
    <div className='mx-auto flex w-full max-w-screen-md flex-col p-4'>
      <h1 className='text-center text-3xl font-bold'>Welcome to Remix!</h1>
      <p className='text-gray-600'>
        Remix is a full stack web framework for <strong>React</strong> that lets
        you build modern, scalable, and interactive applications.
      </p>
      <div className='ml-5'>
        <p className='font-semibold'>🎉 Features:</p>
        <ul className='list-inside list-disc'>
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
      <Link href='/welcome' className='mx-auto mt-20'>
        Go to Welcome route
      </Link>
    </div>
  );
}
