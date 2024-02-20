import { tableCustomStyles } from '@/utils/tableStyle';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { BsDownload } from 'react-icons/bs';

function UserDonationList() {
  const [data, setdata] = useState(['2014-2015', '2016-2017', '2018-2019']);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    {
      name: 'SL',
      cell: (row, index) => {
        let num = ++index;

        return num;
      },
    },

    {
      name: 'Year',
      cell: (row) => row,
    },

    {
      name: 'Download PDF',
      cell: (row) => (
        <div className='flex  justify-center gap-5'>
          <button
            // onClick={() => handleRemove(row.id)}
            className='h-8 w-8 bg-violet-100 rounded-full flex items-center justify-center'
          >
            <BsDownload className='text-xl text-violet-500 hover:text-red-400' />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div class='overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1'>
        <ul class='flex items-center gap-2 text-sm font-medium'>
          <li class='flex-1'>
            <a
              href='#'
              class='text-gra relative flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 shadow hover:bg-white hover:text-gray-700'
            >
              Special Meal Sponsor List
            </a>
          </li>
          <li class='flex-1'>
            <a
              href='#'
              class='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow'
            >
              Donation List
            </a>
          </li>
          <li class='flex-1'>
            <a
              href='#'
              class='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow'
            >
              Sponsor List
            </a>
          </li>
          <li class='flex-1'>
            <a
              href='#'
              class='flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:bg-white hover:text-gray-700 hover:shadow'
            >
              Branch List
            </a>
          </li>
        </ul>
      </div>
      <div className='text-center text-xl uppercase text-green-600 py-4'>
        Special Meal Sponsor List
      </div>
      <div className=''>
        <DataTable
          data={data}
          customStyles={tableCustomStyles}
          columns={columns}
          pagination
          progressPending={isLoading}
          progressComponent={<Loader />}
        />
      </div>{' '}
    </div>
  );
}

export default UserDonationList;

const Loader = () => {
  return (
    <div>
      <div className='flex items-center justify-center space-x-2 my-6'>
        <div className='w-1 h-1 bg-cyan-500 rounded-full animate-ping'></div>
        <div className='w-2 h-2 bg-cyan-300 rounded-full animate-ping'></div>
        <div className='w-3 h-3 bg-cyan-400 rounded-full animate-ping'></div>
        <div className='w-2 h-2 bg-cyan-300 rounded-full animate-ping'></div>
        <div className='w-1 h-1 bg-cyan-500 rounded-full animate-ping'></div>
      </div>
    </div>
  );
};
