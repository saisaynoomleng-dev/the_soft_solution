'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';

const SearchResetForm = () => {
  const router = useRouter();
  const reset = () => {
    const searchForm = document.querySelector(
      '#search-form',
    ) as HTMLFormElement;
    if (searchForm) searchForm.reset();
    router.push('/blog');
  };
  return (
    <Button
      type="reset"
      aria-label="clear search"
      className="cursor-pointer bg-red-600 text-brand-white col-span-full"
      onClick={reset}
    >
      Clear
    </Button>
  );
};

export default SearchResetForm;
