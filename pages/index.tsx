import tw from 'twin.macro';
import Link from 'next/link';

const Pages = () => (
  <div css={tw`fixed inset-0 flex justify-center items-center`}>
    <Link href="#" css={tw`text-xl font-bold text-blue-500`}>
      Next / SWC / tailwind / emotion
    </Link>
  </div>
);

export default Pages;
