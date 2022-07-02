/* This example requires Tailwind CSS v2.0+ */
import React, { SyntheticEvent } from 'react';
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const country = [
  {
    id: 1,
    name: 'US',
  },
  {
    id: 2,
    name: 'FR',
  },
  {
    id: 3,
    name: 'RU',
  },
]


var classNames = require('classnames');

export default function SelectCountry() {
  const [selected, setSelected] = useState(country[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative ">
            <Listbox.Button className="relative  bg-[#02393e] text-gray-300 w-full rounded-md shadow-sm pl-1 pr-5 py-2 items-center text-base font-medium text-center cursor-default focus:outline-none focus:ring-1 hover:text-white sm:text-sm">
              <span className="flex items-center">
                <span className="ml-1 block w-5 truncate">{selected.name}</span>
              </span>
              <span className="ml-1 absolute inset-y-0 right-0 flex items-center pr-1 pointer-events-none">
                <SelectorIcon className="h-4 w-4 text-gray-300" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-[#154e54] shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {country.map((country) => (
                  <Listbox.Option
                    key={country.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-[#154e54] hover:bg-[#045b62]' : 'text-gray-300',
                        'cursor-default select-none relative py-2 pl-1 pr-1'
                      )
                    }
                    value={country}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames('font-semibold ml-1 block w-5 truncate')}
                          >
                            {country.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'bg-[#154e54]',
                              'absolute ml-1 inset-y-0 right-0 flex items-center pr-1'
                            )}
                          >
                            <CheckIcon className="h-4 w-4" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}