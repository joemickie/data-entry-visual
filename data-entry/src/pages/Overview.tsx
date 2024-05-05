import React from "react";
import { FunctionComponent, useState } from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { PieChart, Pie, Cell, } from 'recharts';
import { Button } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';




const Overview: FunctionComponent = () => {
  const [excludeIconChecked, setExcludeIconChecked] = useState(true);
  const datas = [
    { name: 'Jan', revenue: 10000 },
    { name: 'Feb', revenue: 15000 },
    { name: 'Mar', revenue: 20000 },
    { name: 'Apr', revenue: 18000 },
    { name: 'May', revenue: 22000 },
    { name: 'Jun', revenue: 25000 },
    { name: 'Jul', revenue: 28000 },
    { name: 'Aug', revenue: 26000 },
    { name: 'Sep', revenue: 30000 },
    { name: 'Oct', revenue: 32000 },
    { name: 'Nov', revenue: 34000 },
    { name: 'Dec', revenue: 36000 },
  ];

  const data = [
    { name: 'Drama', value: 2574 },
    { name: 'Comedy', value: 1000 },
    { name: 'Horror', value: 800 },
    { name: 'Sci-fi', value: 500 },
    { name: 'Docu', value: 300 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#ff85a2'];

  const [activePage, setActivePage] = React.useState(""); // State to track active page

    // Function to handle navigation click and update active page
    const handleNavigation = (path: string) => {
        setActivePage(path);
    };

  return (
    <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-[23.2px] text-greyscale-900 font-body-small-semibold mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
      <div className="h-8 w-[153px] rounded-lg hidden" />
      <div className="w-[250px] bg-additional-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-8 px-0 pb-[241px] box-border gap-[364px] z-[2] mq1025:hidden mq1025:pt-[21px] mq1025:pb-[157px] mq1025:box-border mq450:gap-[182px] mq450:pt-5 mq450:pb-[102px] mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[39px] mq450:gap-[19px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[27px]">
            <div className="flex flex-row items-start justify-start py-0 px-6">
              <div className="flex flex-row items-end justify-start gap-[16px]">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
                  {/* <img
                    className="w-6 h-6 relative overflow-hidden shrink-0 [debug_commit:1de1738]"
                    loading="lazy"
                    alt=""
                    src="/menu2.svg"
                  /> */}
                  <div className="flex flex-shrink-0 justify-center items-center p-1 w-6 h-6">
                    <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1H17" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 7H17" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1 13H17" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[9.3px] shrink-0 [debug_commit:1de1738]">
                  {/* <input
                    className="accent-primary-600-base m-0 h-[27.8px] w-[27.8px] relative shrink-0 [debug_commit:1de1738]"
                    checked={excludeIconChecked}
                    type="checkbox"
                    onChange={(event) =>
                      setExcludeIconChecked(event.target.checked)
                    }
                  /> */}
                  <svg width={28} height={29} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.529798 4.87654C0 6.15559 0 7.77706 0 11.02V17.98C0 21.223 0 22.8444 0.529798 24.1235C1.2362 25.8289 2.59113 27.1838 4.29652 27.8902C5.57557 28.42 7.19704 28.42 10.44 28.42H17.4C20.643 28.42 22.2644 28.42 23.5435 27.8902C25.2489 27.1838 26.6038 25.8289 27.3102 24.1235C27.84 22.8444 27.84 21.223 27.84 17.98V11.02C27.84 7.77706 27.84 6.15559 27.3102 4.87654C26.6038 3.17114 25.2489 1.81621 23.5435 1.10982C22.2644 0.580017 20.643 0.580017 17.4 0.580017H10.44C7.19705 0.580017 5.57557 0.580017 4.29652 1.10982C2.59113 1.81621 1.2362 3.17114 0.529798 4.87654ZM16.0554 8.2023C16.0852 8.094 15.9591 8.01071 15.8713 8.08072L8.10189 14.2711C8.02774 14.3301 8.05193 14.4484 8.14332 14.4736L12.2847 15.6164C12.3465 15.6334 12.3828 15.6973 12.3657 15.759L11.0515 20.5217C11.0217 20.63 11.1478 20.7133 11.2356 20.6432L19.005 14.4529C19.0792 14.3938 19.055 14.2756 18.9636 14.2504L14.8221 13.1076C14.7604 13.0906 14.7241 13.0267 14.7412 12.9649L16.0554 8.2023Z" fill="#2563EB" />
                  </svg>
                  <b className="relative tracking-[-0.29px] leading-[125%] inline-block min-w-[109px] shrink-0 [debug_commit:1de1738] mq450:text-lgi mq450:leading-[23px]">
                    XYZ shop
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-greyscale-100" />
          </div>
          <nav className="m-0 self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-greyscale-500 font-body-small-semibold">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-0 gap-[20px] text-primary-600-base">
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="w-1 h-8 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary-600-base" />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start py-3 px-0">
                <div className="flex flex-row items-start justify-start gap-[16px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    {/* <img
                      className="w-[22px] h-[22px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/layoutgrid.svg"
                    /> */}
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.24996 3.66669H4.58329C4.07703 3.66669 3.66663 4.07709 3.66663 4.58335V8.25002C3.66663 8.75628 4.07703 9.16669 4.58329 9.16669H8.24996C8.75622 9.16669 9.16663 8.75628 9.16663 8.25002V4.58335C9.16663 4.07709 8.75622 3.66669 8.24996 3.66669Z" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.4166 3.66669H13.75C13.2437 3.66669 12.8333 4.07709 12.8333 4.58335V8.25002C12.8333 8.75628 13.2437 9.16669 13.75 9.16669H17.4166C17.9229 9.16669 18.3333 8.75628 18.3333 8.25002V4.58335C18.3333 4.07709 17.9229 3.66669 17.4166 3.66669Z" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.24996 12.8334H4.58329C4.07703 12.8334 3.66663 13.2438 3.66663 13.75V17.4167C3.66663 17.9229 4.07703 18.3334 4.58329 18.3334H8.24996C8.75622 18.3334 9.16663 17.9229 9.16663 17.4167V13.75C9.16663 13.2438 8.75622 12.8334 8.24996 12.8334Z" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M17.4166 12.8334H13.75C13.2437 12.8334 12.8333 13.2438 12.8333 13.75V17.4167C12.8333 17.9229 13.2437 18.3334 13.75 18.3334H17.4166C17.9229 18.3334 18.3333 17.9229 18.3333 17.4167V13.75C18.3333 13.2438 17.9229 12.8334 17.4166 12.8334Z" stroke="#2563EB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <b className="relative tracking-[0.2px] leading-[150%] inline-block min-w-[77px]">
                    Overview
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-6 gap-[20px]">
              <div className="h-8 w-1 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 hidden" />
              <div className="flex-1 flex flex-row items-center justify-start py-3 px-0 gap-[80px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  {/* <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/briefcase.svg"
                  /> */}
                  <div className="flex justify-center items-center pb-[0.1875rem] p-0 w-[1.375rem] h-[1.375rem]">
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.4167 4.41669H2.58333C1.57081 4.41669 0.75 5.2375 0.75 6.25002V14.5C0.75 15.5125 1.57081 16.3334 2.58333 16.3334H15.4167C16.4292 16.3334 17.25 15.5125 17.25 14.5V6.25002C17.25 5.2375 16.4292 4.41669 15.4167 4.41669Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.33337 4.41667V2.58333C5.33337 2.0971 5.52653 1.63079 5.87035 1.28697C6.21416 0.943154 6.68048 0.75 7.16671 0.75H10.8334C11.3196 0.75 11.7859 0.943154 12.1297 1.28697C12.4736 1.63079 12.6667 2.0971 12.6667 2.58333V4.41667" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 9V9.00917" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0.75 9.91669C3.30895 11.2061 6.13453 11.8778 9 11.8778C11.8655 11.8778 14.6911 11.2061 17.25 9.91669" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="relative tracking-[0.2px] leading-[150%] font-medium inline-block min-w-[43px]">
                    Sales
                  </div>
                </div>
                <div className="h-6 rounded bg-primary-600-base hidden flex-row items-center justify-center p-2 box-border text-xs text-additional-white">
                  <div className="relative leading-[160%] font-medium">150</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-6 gap-[20px]">
              <div className="h-8 w-1 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 hidden" />
              <div className="flex-1 flex flex-row items-center justify-start py-3 px-0 gap-[80px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  {/* <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/calendar.svg"
                  /> */}
                  <div className="flex justify-center items-center pl-[0.1875rem] pr-[0.1875rem] p-0 w-[1.375rem] h-[1.375rem]">
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.5 2.58331H3.49996C2.48744 2.58331 1.66663 3.40412 1.66663 4.41665V15.4166C1.66663 16.4292 2.48744 17.25 3.49996 17.25H14.5C15.5125 17.25 16.3333 16.4292 16.3333 15.4166V4.41665C16.3333 3.40412 15.5125 2.58331 14.5 2.58331Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12.6666 0.75V4.41667" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.33325 0.75V4.41667" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M1.66663 8.08334H16.3333" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.08325 11.75H8.99992" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 11.75V14.5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="relative tracking-[0.2px] leading-[150%] font-medium inline-block min-w-[86px]">
                    Customers
                  </div>
                </div>
                <div className="h-6 rounded bg-primary-600-base hidden flex-row items-center justify-center p-2 box-border text-xs text-additional-white">
                  <div className="relative leading-[160%] font-medium">150</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-6 gap-[20px]">
              <div className="h-8 w-1 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 hidden" />
              <div className="flex-1 flex flex-row items-center justify-start py-3 px-0 gap-[80px]">
                <div className="flex flex-row items-center justify-start gap-[15px]">
                  {/* <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/history.svg"
                  /> */}
                  <div className="flex justify-center items-center p-0 w-[1.375rem] h-[1.375rem]">
                    <svg width={18} height={19} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 6.33334V10L10.8333 11.8333" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M0.795776 9.08333C1.00119 7.06672 1.94185 5.19631 3.43828 3.82897C4.93471 2.46163 6.88216 1.69306 8.90908 1.66991C10.936 1.64676 12.9005 2.37064 14.4278 3.70345C15.955 5.03626 16.9382 6.88469 17.1896 8.89609C17.441 10.9075 16.9431 12.941 15.7909 14.6088C14.6387 16.2765 12.9129 17.4617 10.9426 17.9382C8.97237 18.4147 6.89565 18.1491 5.10869 17.1922C3.32173 16.2353 0.795776 12.75 0.795776 12.75M0.795776 17.3333V12.75M0.795776 12.75H5.37911" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="relative tracking-[0.2px] leading-[150%] font-medium inline-block min-w-[75px]">
                    Inventory
                  </div>
                </div>
                <div className="h-6 w-[37px] rounded bg-primary-600-base hidden flex-row items-center justify-center p-2 box-border text-xs text-additional-white">
                  <div className="relative leading-[160%] font-medium">10</div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-6 gap-[20px]">
              <div className="h-8 w-1 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 hidden" />
              <div className="flex-1 flex flex-row items-center justify-start py-3 px-0 gap-[80px]">
                <div className="flex flex-row items-center justify-start gap-[16px]">
                  {/* <img
                    className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/star.svg"
                  /> */}
                  <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 16.2708L5.34231 19.2454L6.42306 12.9452L1.83972 8.48376L8.16472 7.56709L10.9936 1.83517L13.8224 7.56709L20.1474 8.48376L15.5641 12.9452L16.6448 19.2454L11 16.2708Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="relative tracking-[0.2px] leading-[150%] font-medium inline-block min-w-[86px]">
                    Profit/Loss
                  </div>
                </div>
                <div className="h-6 rounded bg-primary-600-base hidden flex-row items-center justify-center p-2 box-border text-xs text-additional-white">
                  <div className="relative leading-[160%] font-medium">150</div>
                </div>
              </div>
            </div>
            {/* <div className="self-stretch hidden flex-row items-center justify-start py-0 px-6 gap-[20px]">
              <div className="h-8 w-1 relative rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-greyscale-900 hidden" />
              <div className="h-12 flex-1 flex flex-row items-center justify-start gap-[80px]">
                <div className="h-6 flex-1 flex flex-row items-start justify-between gap-[20px]">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[16px]">
                    <img
                      className="h-[22px] w-[22px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/mail.svg"
                    />
                    <div className="self-stretch relative tracking-[0.2px] leading-[150%] font-medium">
                      Message
                    </div>
                  </div>
                  <div className="h-6 rounded bg-primary-50 flex flex-row items-center justify-center p-2 box-border text-xs text-primary-600-base">
                    <div className="relative leading-[160%] font-medium">
                      150
                    </div>
                  </div>
                </div>
                <div className="h-6 rounded bg-primary-600-base hidden flex-row items-center justify-center p-2 box-border text-xs text-additional-white">
                  <div className="relative leading-[160%] font-medium">150</div>
                </div>
              </div>
            </div> */}
          </nav>
        </div>
        <div className="w-[234px] flex flex-row items-start justify-start py-0 px-2 box-border text-sm text-greyscale-500">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
            <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-[13px] px-4 gap-[16px]">
              {/* <img
                className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px]"
                loading="lazy"
                alt=""
                src="/settings.svg"
              /> */}
              <div className="flex flex-shrink-0 justify-center items-center p-0.5 w-[1.375rem] h-[1.375rem]">
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.46458 1.95725C7.85508 0.347583 10.1449 0.347583 10.5354 1.95725C10.594 2.19907 10.7089 2.42363 10.8707 2.61267C11.0324 2.8017 11.2366 2.94987 11.4664 3.0451C11.6963 3.14033 11.9454 3.17995 12.1935 3.16071C12.4415 3.14148 12.6816 3.06394 12.894 2.93442C14.3084 2.07275 15.9282 3.69158 15.0665 5.10692C14.9372 5.31927 14.8597 5.55914 14.8406 5.80704C14.8214 6.05494 14.8609 6.30387 14.9561 6.5336C15.0512 6.76332 15.1992 6.96736 15.388 7.12913C15.5768 7.2909 15.8012 7.40583 16.0428 7.46458C17.6524 7.85508 17.6524 10.1449 16.0428 10.5354C15.8009 10.594 15.5764 10.7089 15.3873 10.8707C15.1983 11.0324 15.0501 11.2366 14.9549 11.4664C14.8597 11.6963 14.8201 11.9454 14.8393 12.1935C14.8585 12.4415 14.9361 12.6816 15.0656 12.894C15.9273 14.3084 14.3084 15.9282 12.8931 15.0665C12.6807 14.9372 12.4409 14.8597 12.193 14.8406C11.9451 14.8214 11.6961 14.8609 11.4664 14.9561C11.2367 15.0512 11.0326 15.1992 10.8709 15.388C10.7091 15.5768 10.5942 15.8012 10.5354 16.0428C10.1449 17.6524 7.85508 17.6524 7.46458 16.0428C7.40599 15.8009 7.29113 15.5764 7.12935 15.3873C6.96757 15.1983 6.76344 15.0501 6.53357 14.9549C6.3037 14.8597 6.0546 14.8201 5.80653 14.8393C5.55846 14.8585 5.31844 14.9361 5.106 15.0656C3.69158 15.9273 2.07183 14.3084 2.9335 12.8931C3.06284 12.6807 3.14025 12.4409 3.15944 12.193C3.17863 11.9451 3.13906 11.6961 3.04393 11.4664C2.94881 11.2367 2.80082 11.0326 2.612 10.8709C2.42318 10.7091 2.19885 10.5942 1.95725 10.5354C0.347583 10.1449 0.347583 7.85508 1.95725 7.46458C2.19907 7.40599 2.42363 7.29113 2.61267 7.12935C2.8017 6.96757 2.94987 6.76344 3.0451 6.53357C3.14033 6.3037 3.17995 6.0546 3.16071 5.80653C3.14148 5.55846 3.06394 5.31844 2.93442 5.106C2.07275 3.69158 3.69158 2.07183 5.10692 2.9335C6.02358 3.49083 7.21158 2.99767 7.46458 1.95725Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75Z" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="relative tracking-[0.2px] leading-[160%] font-medium inline-block min-w-[58px]">
                Settings
              </div>
            </div>
            <div className="self-stretch rounded-xl flex flex-row items-start justify-start py-[13px] px-4 gap-[16px]">
              {/* <img
                className="h-[22px] w-[22px] relative overflow-hidden shrink-0 min-h-[22px]"
                loading="lazy"
                alt=""
                src="/logout.svg"
              /> */}
              <div className="flex flex-shrink-0 justify-center items-center pt-[0.1875rem] pb-[0.1875rem] px-0 w-[1.375rem] h-[1.375rem]">
                <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8333 5.33333V3.5C10.8333 3.01377 10.6402 2.54745 10.2964 2.20363C9.95254 1.85982 9.48623 1.66666 9 1.66666H2.58333C2.0971 1.66666 1.63079 1.85982 1.28697 2.20363C0.943154 2.54745 0.75 3.01377 0.75 3.5V14.5C0.75 14.9862 0.943154 15.4525 1.28697 15.7964C1.63079 16.1402 2.0971 16.3333 2.58333 16.3333H9C9.48623 16.3333 9.95254 16.1402 10.2964 15.7964C10.6402 15.4525 10.8333 14.9862 10.8333 14.5V12.6667" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.41663 9H17.25M17.25 9L14.5 6.25M17.25 9L14.5 11.75" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="relative tracking-[0.2px] leading-[160%] font-medium inline-block min-w-[55px]">
                Log Out
              </div>
            </div>
            <NavLink to="/" onClick={() => handleNavigation("")} className="flex relative flex-col gap-3.5 ml-5 text-xs text-center text-gray-500 whitespace-nowrap font-[450] ">
              <div className="gap-0 mt-3.5 slashed-zero">InputForm</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="h-[901px] w-px relative box-border hidden border-r-[1px] border-solid border-greyscale-100" />
      <main className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_250px)] mq1025:max-w-full">
        <section className="self-stretch h-[88px] bg-additional-white overflow-hidden shrink-0 flex flex-col items-end justify-start py-5 px-0 box-border gap-[20px]">
          <div className="w-10 h-10 relative rounded-981xl overflow-hidden shrink-0 hidden" />
          <div className="w-[204px] flex flex-row items-start justify-end py-0 px-8 box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
              <div className="flex-1 relative flex flex-col items-start justify-start pt-1 pb-0 pr-3 pl-0">
                {/* <img
                  className="w-10 h-10 relative rounded-981xl overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                /> */}
                <div className="flex flex-shrink-0 justify-center items-center pt-[0.1875rem] pb-[0.1875rem] mt-2 px-1 w-6 h-6">
                  <svg width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.8321 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0753 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.4551 14.6914 17 15H1C1.54494 14.6914 2.00981 14.2592 2.35719 13.7381C2.70457 13.2171 2.92474 12.6217 3 12V9C3.05956 7.73107 3.4633 6.50227 4.16795 5.4453C4.8726 4.38833 5.85159 3.54303 7 3" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 15V16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7956 12 16V15" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className=" absolute left-3 bottom-2">
                  <svg width={8} height={8} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={4} cy={4} r="3.5" fill="#ED4F9D" stroke="white" />
                  </svg>
                </div>
              </div>
              {/* <img
                className="h-12 w-12 relative object-cover"
                loading="lazy"
                alt=""
                src="/avatar@2x.png"
              /> */}
              <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-12 h-12 bg-[url(<path-to-image>)" />
              <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0">
                {/* <img
                  className="w-4 h-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevrondown.svg"
                /> */}
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="#94A3B8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="self-stretch h-px relative box-border shrink-0 border-t-[1px] border-solid border-greyscale-100" />
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full text-left text-5xl text-greyscale-900 font-body-small-semibold">
          <div className="flex-1 flex flex-col items-start justify-start gap-[72px] max-w-full mq750:gap-[18px] mq1125:gap-[36px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="w-[1098px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start gap-[8px]">
                  <h1 className="m-0 relative text-inherit tracking-[0.2px] leading-[125%] font-bold font-inherit mq450:text-lgi mq450:leading-[24px]">
                    Welcome, Mattew
                  </h1>
                  <div className="relative text-base leading-[26px] text-greyscale-500">
                    Monday, 05 Agust 2022
                  </div>
                </div>
                <div className="w-[90px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border text-right text-xs text-greyscale-500">
                  <div className="self-stretch rounded-lg flex flex-row items-start justify-start py-[5px] px-[7px] gap-[4px] z-[1] border-[1px] border-solid border-greyscale-200">
                    <div className="relative leading-[160%] font-semibold inline-block min-w-[54px]">
                      This Year
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      {/* <img
                        className="w-4 h-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/chevrondown-1.svg"
                      /> */}
                      <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-additional-white overflow-x-auto flex flex-row items-start justify-start gap-[23.6px] text-sm text-greyscale-500">
                <div className="flex-1 bg-additional-white flex flex-col items-start justify-start py-5 px-6 gap-[16px]">
                  <img
                    className="w-0 h-0 relative"
                    alt=""
                    src="/group-39.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="relative tracking-[0.2px] leading-[160%] font-semibold whitespace-pre-wrap inline-block min-w-[102px]">
                      Total Revenue
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-5xl text-greyscale-900">
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[107.3px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border">
                      <b className="relative tracking-[0.2px] leading-[125%] inline-block min-w-[106px] whitespace-nowrap mq450:text-lgi mq450:leading-[24px]">
                        $40,000
                      </b>
                      <button className="cursor-pointer [border:none] py-1 px-2 bg-secondary-algal-fuel-50 rounded-31xl flex flex-row items-center justify-center hover:bg-gainsboro-200">
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          alt=""
                          src="/arrownarrowup.svg"
                        />
                        <div className="relative text-xs leading-[160%] font-medium font-body-small-semibold text-secondary-algal-fuel-500-base text-left inline-block min-w-[26px]">
                          59%
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-[98px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border">
                  <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-greyscale-200" />
                </div>
                <div className="w-[335.3px] shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                  <div className="self-stretch bg-additional-white flex flex-col items-start justify-start py-5 px-6 gap-[16px]">
                    <img
                      className="w-12 h-12 relative hidden"
                      alt=""
                      src="/group-39.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.2px] leading-[160%] font-semibold inline-block min-w-[48px]">
                        Orders
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-5xl text-greyscale-900">
                      <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pr-[131.3px] pl-0 gap-[16px] mq450:pr-5 mq450:box-border">
                        <b className="relative tracking-[0.2px] leading-[125%] inline-block min-w-[90px] mq450:text-lgi mq450:leading-[24px]">
                          40,000
                        </b>
                        <button className="cursor-pointer [border:none] py-1 px-2 bg-secondary-glamour-pink-50 rounded-31xl flex flex-row items-center justify-center hover:bg-gainsboro-300">
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0"
                            alt=""
                            src="/arrownarrowdown.svg"
                          />
                          <div className="relative text-xs leading-[160%] font-medium font-body-small-semibold text-secondary-glamour-pink-500-base text-left inline-block min-w-[18px]">
                            9%
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[98px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border">
                  <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-greyscale-200" />
                </div>
                <div className="w-[335.3px] shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                  <div className="self-stretch bg-additional-white flex flex-col items-start justify-start py-5 px-6 gap-[16px]">
                    <img
                      className="w-12 h-12 relative hidden"
                      alt=""
                      src="/group-39.svg"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start">
                      <div className="relative tracking-[0.2px] leading-[160%] font-semibold inline-block min-w-[77px]">
                        Customers
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-5xl text-greyscale-900">
                      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[181px] pl-0 gap-[15px] mq450:flex-wrap mq450:pr-5 mq450:box-border">
                        <b className="relative tracking-[0.2px] leading-[125%] inline-block min-w-[34px] mq450:text-lgi mq450:leading-[24px]">
                          40
                        </b>
                        <button className="cursor-pointer [border:none] py-1 px-2 bg-secondary-glamour-pink-50 rounded-31xl flex flex-row items-center justify-center hover:bg-gainsboro-300">
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0"
                            alt=""
                            src="/arrownarrowdown-1.svg"
                          />
                          <div className="relative text-xs leading-[160%] font-medium font-body-small-semibold text-secondary-glamour-pink-500-base text-left inline-block min-w-[26px]">
                            59%
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[98px] flex flex-col items-start justify-start pt-[26px] px-0 pb-0 box-border">
                  <div className="w-px flex-1 relative box-border border-r-[1px] border-solid border-greyscale-200" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[26px] max-w-full text-xs text-greyscale-500">
              <div className="self-stretch flex flex-row items-start justify-start gap-[27px] max-w-full mq1025:flex-wrap">

                {/* <div className="flex-1 rounded-xl bg-additional-white flex flex-col items-start justify-start pt-[41.1px] px-[17.1px] pb-[26px] box-border gap-[41.1px] max-w-full mq750:gap-[21px] mq750:min-w-full mq450:pt-[27px] mq450:pb-5 mq450:box-border">
                  <div className="w-[662px] h-[364px] relative rounded-xl bg-additional-white hidden max-w-full" />
                  <b className="relative text-mini leading-[160%] z-[1]">
                    Revenue over time
                  </b>
                  <div className="w-[143px] hidden flex-row items-center justify-start gap-[8px] text-lg text-greyscale-900">
                    <b className="self-stretch relative tracking-[0.2px] leading-[140%] whitespace-nowrap">
                      $48,574.21
                    </b>
                    <div className="w-[33px] relative text-xs leading-[160%] font-medium text-additional-emerald hidden">
                      +20%
                    </div>
                  </div>
                  <div className="w-[552.4px] hidden flex-row items-center justify-between gap-[20px] max-w-full mq450:flex-wrap">
                    <div className="w-[21px] relative leading-[160%] hidden shrink-0">
                      May
                    </div>
                    <div className="h-[19px] w-[17px] relative leading-[160%] inline-block shrink-0 mq450:w-full mq450:h-[17px]">
                      Jul
                    </div>
                    <div className="h-[19px] w-[23px] relative leading-[160%] inline-block shrink-0">
                      Aug
                    </div>
                    <div className="h-[19px] w-[22px] relative leading-[160%] inline-block shrink-0">
                      Sep
                    </div>
                    <div className="h-[19px] w-[21px] relative leading-[160%] inline-block shrink-0">
                      Oct
                    </div>
                    <div className="h-[19px] w-[23px] relative leading-[160%] inline-block shrink-0">
                      Nov
                    </div>
                    <div className="h-[19px] w-[23px] relative leading-[160%] inline-block shrink-0">
                      Dec
                    </div>
                  </div>
                  <div className="w-20 rounded-lg box-border hidden flex-row items-center justify-start p-2 gap-[4px] whitespace-nowrap border-[1px] border-solid border-greyscale-100">
                    <div className="relative leading-[160%] font-semibold shrink-0">
                      This Year
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/chevrondown-2.svg"
                    />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-[3px] box-border max-w-full text-right">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[9.2px] max-w-full">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[12.9px] max-w-full mq750:flex-wrap">
                        <div className="h-[203.6px] flex flex-col items-end justify-start pt-0 px-0 pb-[46.2px] box-border gap-[27.2px] z-[1]">
                          <div className="relative leading-[160%] inline-block min-w-[23px]">
                            50K
                          </div>
                          <div className="relative leading-[160%] inline-block min-w-[24px]">
                            40K
                          </div>
                          <div className="relative leading-[160%] inline-block min-w-[23px]">
                            30K
                          </div>
                          <div className="relative leading-[160%] inline-block min-w-[23px]">
                            20K
                          </div>
                          <div className="relative leading-[160%] inline-block min-w-[21px]">
                            10K
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border min-w-[378px] max-w-full mq750:min-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[16.1px]">
                            <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-greyscale-100" />
                            <div className="self-stretch h-[166.5px] relative">
                              <div className="absolute top-[165.4px] left-[0px] box-border w-[582.8px] h-px z-[1] border-t-[1px] border-solid border-greyscale-100" />
                              <div className="absolute top-[120.1px] left-[0px] box-border w-[582.8px] h-px z-[1] border-t-[1px] border-solid border-greyscale-100" />
                              <div className="absolute top-[74.7px] left-[0px] box-border w-[582.8px] h-px z-[1] border-t-[1px] border-solid border-greyscale-100" />
                              <div className="absolute top-[29.3px] left-[0px] box-border w-[582.8px] h-px z-[1] border-t-[1px] border-solid border-greyscale-100" />
                              <img
                                className="absolute top-[0px] left-[0.9px] w-full h-full z-[2]"
                                alt=""
                                src="/chart.svg"
                              />
                              <div className="absolute top-[21.6px] left-[163.1px] w-[12.5px] h-[15.5px] z-[3] flex items-center justify-center">
                                <img
                                  className="w-full h-full z-[3] object-contain absolute left-[0px] top-[1px] [transform:scale(2.28)]"
                                  loading="lazy"
                                  alt=""
                                  src="/group-31.svg"
                                />
                              </div>
                              <div className="absolute top-[38.2px] left-[169.3px] box-border w-px h-[128.2px] z-[3] border-r-[1px] border-dashed border-greyscale-300" />
                              <button className="cursor-pointer py-2 px-3 bg-gray-100 absolute top-[12.4px] left-[177.7px] shadow-[0px_20px_40px_rgba(15,_23,_42,_0.15)] [backdrop-filter:blur(8px)] rounded-xl box-border w-[94px] h-[37px] flex flex-row items-start justify-start gap-[4px] z-[3] border-[1px] border-solid border-gray-200">
                                <b className="relative text-xs leading-[160%] inline-block font-body-small-semibold text-additional-white text-left min-w-[68px] whitespace-nowrap">
                                  $40,567.88
                                </b>
                                <div className="w-0 relative text-[10px] leading-[160%] font-body-small-semibold text-greyscale-200 text-left hidden" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[589.6px] flex flex-row items-start justify-end py-0 pr-[12.8px] pl-[13px] box-border max-w-full text-left">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[19px] max-w-full mq750:flex-wrap">
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[31px] z-[4]">
                            Jan
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[31px] z-[4]">
                            Feb
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[32px] z-[4]">
                            Mar
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[29px] z-[4]">
                            Apr
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[29px] z-[4]">
                            May
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[29px] z-[4]">
                            Jun
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[29px] z-[4]">
                            Jul
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[29px] z-[4]">
                            Sep
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[29px] z-[4]">
                            Aug
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[29px] z-[4]">
                            Oct
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[29px] z-[4]">
                            Nov
                          </div>
                          <div className="flex-1 relative leading-[160%] inline-block min-w-[31px] max-w-[29px] z-[4]">
                            Dec
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="flex-1 rounded-xl bg-additional-white flex flex-col items-start justify-start pt-[41.1px] px-[17.1px] pb-[26px] box-border gap-[41.1px] max-w-full mq750:gap-[21px] mq750:min-w-full mq450:pt-[27px] mq450:pb-5 mq450:box-border">
                  <b className="relative text-mini leading-[160%] z-[1]">
                    Revenue over time
                  </b>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={datas}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* <div className="w-[435px] rounded-xl bg-additional-white flex flex-col items-start justify-start pt-7 pb-[23px] pr-[23px] pl-6 box-border gap-[44px] min-w-[435px] max-w-full mq750:min-w-full mq1025:flex-1 mq450:gap-[22px] mq450:pt-5 mq450:pb-5 mq450:box-border">
                  <div className="w-[435px] h-[364px] relative rounded-xl bg-additional-white hidden max-w-full" />
                  <b className="relative text-mini tracking-[0.2px] leading-[160%] z-[1]">
                    Orders by categories
                  </b>
                  <img
                    className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/alertcircle.svg"
                  />
                  <div className="w-[97px] h-8 rounded-lg box-border hidden flex-row items-center justify-start py-2 px-[7px] gap-[4px] whitespace-nowrap text-right border-[1px] border-solid border-greyscale-200">
                    <div className="relative leading-[160%] font-semibold">
                      This Week
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                      alt=""
                      src="/chevrondown-3.svg"
                    />
                  </div>
                  <div className="w-[206.8px] h-[206.8px] relative rounded-[50%] bg-greyscale-50 hidden" />
                  <div className="w-[206.8px] h-[206.8px] relative rounded-[50%] bg-additional-sky hidden" />
                  <div className="w-[369px] flex flex-row items-start justify-start py-0 px-7 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[1.5px]">
                      <div className="self-stretch h-[224.5px] relative">
                        <div className="absolute top-[0px] left-[0px] w-[224.5px] flex flex-col items-center justify-start pt-[88.2px] px-5 pb-[88.3px] box-border gap-[4px] text-center">
                          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[2px_10px_25px_rgba(71,_85,_105,_0.2)] rounded-[50%] bg-primary-600-base z-[3]" />
                          <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                            <div className="relative leading-[160%] inline-block min-w-[28px] z-[4]">
                              Total
                            </div>
                          </div>
                          <b className="relative text-lg tracking-[0.2px] leading-[140%] inline-block text-greyscale-900 min-w-[46px] z-[4]">
                            2574
                          </b>
                        </div>
                        <button className="cursor-pointer [border:none] pt-[5.6px] px-[19.5px] pb-[5.7px] bg-additional-white absolute top-[63.1px] left-[174px] shadow-[2px_10px_25px_rgba(71,_85,_105,_0.08)] rounded flex flex-row items-start justify-start whitespace-nowrap z-[4] hover:bg-gainsboro-100">
                          <b className="relative text-xs leading-[160%] inline-block font-body-small-semibold text-greyscale-900 text-center min-w-[72px]">
                            Drama: 40%
                          </b>
                        </button>
                        <div className="absolute top-[161.5px] left-[257px] rounded bg-mediumpurple w-2.5 h-2.5 z-[1]" />
                        <div className="absolute top-[157px] left-[275px] leading-[160%] font-semibold inline-block min-w-[38px] z-[1]">
                          Drama
                        </div>
                        <div className="absolute top-[180px] left-[257px] w-14 overflow-hidden flex flex-row items-start justify-start gap-[8px] z-[1]">
                          <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                            <div className="w-2.5 h-2.5 relative rounded bg-darkturquoise shrink-0 [debug_commit:1de1738]" />
                          </div>
                          <div className="w-[49px] relative leading-[160%] font-semibold inline-block shrink-0 [debug_commit:1de1738]">
                            Comedy
                          </div>
                        </div>
                        <div className="absolute top-[207.5px] left-[257px] rounded bg-yellowgreen w-2.5 h-2.5 z-[1]" />
                        <div className="absolute top-[203px] left-[275px] leading-[160%] font-semibold inline-block min-w-[38px] z-[1]">
                          Horror
                        </div>
                        <div className="absolute top-[138.5px] left-[257px] rounded bg-primary-600-base w-2.5 h-2.5 z-[1]" />
                        <div className="absolute top-[134px] left-[275px] leading-[160%] font-semibold inline-block min-w-[34px] z-[1]">
                          SCi-fi
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-end py-0 px-[7px]">
                        <div className="flex flex-row items-start justify-start gap-[8px]">
                          <div className="flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                            <div className="w-2.5 h-2.5 relative rounded bg-crimson z-[1]" />
                          </div>
                          <div className="relative leading-[160%] font-semibold inline-block min-w-[31px] z-[1]">
                            Docu
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div className="w-[435px] rounded-xl bg-additional-white flex flex-col items-start justify-start pt-7 pb-[23px] pr-[23px] pl-6 box-border gap-[44px] min-w-[435px] max-w-full mq750:min-w-full mq1025:flex-1 mq450:gap-[22px] mq450:pt-5 mq450:pb-5 mq450:box-border">
                  <b className="relative text-mini tracking-[0.2px] leading-[160%] z-[1]">
                    Orders by categories
                  </b>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        label
                      >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

              </div>

              <div className="self-stretch h-[275px] relative rounded-xl bg-additional-white max-w-full mq1025:h-auto mq1025:min-h-[275]">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-additional-white w-full h-full hidden" />
                <b className="absolute top-[21px] left-[20px] text-mini tracking-[0.2px] leading-[160%] inline-block min-w-[52px] z-[1]">
                  Orders
                </b>
                {/* <div className="absolute top-[16px] right-[20px] rounded-lg bg-greyscale-50 h-8 hidden flex-row items-center justify-center p-2 box-border gap-[4px] whitespace-nowrap">
                  <div className="h-[19px] flex-1 relative leading-[160%] font-medium inline-block">
                    Dec 20 - Dec 31
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                    alt=""
                    src="/calendar-1.svg"
                  />
                </div> */}

                {/* <img
                  className="absolute top-[64px] left-[20px] w-[1078px] h-10 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/header.svg"
                /> */}

                {/* <img
                  className="absolute top-[160px] left-[20px] w-[1078px] h-14 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/row.svg"
                /> */}
                <div className="absolute top-[172px] left-[84.4px] rounded-md bg-greyscale-100 w-8 h-8 overflow-hidden hidden">
                  <img
                    className="absolute top-[6px] left-[5px] w-[22px] h-5 object-cover hidden"
                    alt=""
                    src="/image-2@2x.png"
                  />
                </div>
                <div className="absolute top-[228px] left-[84.4px] rounded-md bg-greyscale-100 w-8 h-8 overflow-hidden hidden">
                  <img
                    className="absolute top-[5px] left-[4px] w-6 h-[22px] object-cover"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
                <div className="absolute top-[116px] left-[84.4px] rounded-md bg-greyscale-100 w-8 h-8 overflow-hidden hidden">
                  <img
                    className="absolute top-[6px] left-[5px] w-[22px] h-5 object-cover hidden"
                    alt=""
                    src="/image-1@2x.png"
                  />
                </div>

                <div className="absolute top-[75px] left-[20px] w-[1078px] flex flex-col items-start justify-start gap-[11px] max-w-full text-greyscale-900">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-greyscale-500">
                    <div className="w-[969.4px] flex flex-row items-start justify-start py-0 pr-16 pl-[64.4px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1025:flex-wrap">
                        <div className="w-[141.1px] relative leading-[160%] font-medium inline-block shrink-0 z-[2]">
                          Customer name
                        </div>
                        <div className="w-[143.7px] flex flex-col items-start justify-start py-0 pr-[19.5px] pl-0 box-border">
                          <div className="self-stretch relative leading-[160%] font-medium z-[2]">
                            Product name
                          </div>
                        </div>
                        <div className="w-[102.6px] flex flex-col items-start justify-start py-0 pr-[19.8px] pl-0 box-border">
                          <div className="self-stretch relative leading-[160%] font-medium z-[2]">
                            Category
                          </div>
                        </div>
                        <div className="w-[105.6px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                          <div className="w-[41.4px] relative leading-[160%] font-medium inline-block z-[2]">
                            Date
                          </div>
                        </div>
                        <div className="w-[46px] relative leading-[160%] font-medium inline-block shrink-0 z-[2]">
                          Price
                        </div>

                      </div>

                    </div>
                    <div className="self-stretch bg-additional-white flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border gap-[18px] max-w-full z-[1] text-greyscale-900">
                      <div className="self-stretch h-14 relative bg-additional-white hidden" />
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18.4px] box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-start gap-[24.1px] max-w-full mq1025:flex-wrap">
                          <input
                            className="m-0 h-[23px] w-[21.5px]"
                            type="checkbox"
                          />
                          <div className="flex-[0.5903] flex flex-row items-start justify-start py-0 pr-[90.8px] pl-0 box-border min-w-[127px] mq1025:flex-1">
                            <div className="w-[102px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                              <div className="self-stretch relative leading-[160%] font-semibold z-[3]">
                                Christine Hain
                              </div>
                            </div>
                            <div className="h-[19px] w-0 relative leading-[160%] font-semibold inline-block z-[2] ml-[-101.6px]" />
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border min-w-[127px] mq1025:flex-1">
                            <div className="w-[78.2px] relative leading-[160%] font-semibold inline-block z-[2]">
                              Head On
                            </div>
                          </div>
                          <div className="w-[153.9px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                            <div className="w-[58.3px] relative leading-[160%] font-semibold inline-block z-[2]">
                              Drama
                            </div>
                          </div>
                          <div className="w-[156.9px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                            <div className="w-[85.9px] relative leading-[160%] font-semibold inline-block z-[2]">
                              3/2/2020
                            </div>
                          </div>
                          <div className="w-[139.7px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                            <div className="w-[76.7px] relative leading-[160%] font-semibold inline-block whitespace-nowrap z-[2]">
                              $399.00
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                            {/* <img
                              className="w-[30.7px] h-5 relative overflow-hidden shrink-0 z-[2]"
                              loading="lazy"
                              alt=""
                              src="/dots.svg"
                            /> */}
                            <div className="flex flex-shrink-0 justify-center items-center pl-[0.3125rem] pr-[0.3125rem] p-0 w-[1.875rem] h-5">
                              <svg width={24} height={4} viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.18582 2.83333C3.89156 2.83333 4.46367 2.46023 4.46367 2C4.46367 1.53976 3.89156 1.16666 3.18582 1.16666C2.48007 1.16666 1.90796 1.53976 1.90796 2C1.90796 2.46023 2.48007 2.83333 3.18582 2.83333Z" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.1309 2.83333C12.8366 2.83333 13.4087 2.46023 13.4087 2C13.4087 1.53976 12.8366 1.16666 12.1309 1.16666C11.4251 1.16666 10.853 1.53976 10.853 2C10.853 2.46023 11.4251 2.83333 12.1309 2.83333Z" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.0757 2.83333C21.7814 2.83333 22.3536 2.46023 22.3536 2C22.3536 1.53976 21.7814 1.16666 21.0757 1.16666C20.37 1.16666 19.7979 1.53976 19.7979 2C19.7979 2.46023 20.37 2.83333 21.0757 2.83333Z" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-greyscale-100" />
                    </div>
                  </div>
                  {/* <div className="w-[1016.9px] flex flex-row items-start justify-start pt-0 pb-[7px] pr-16 pl-[64.4px] box-border max-w-full">
                    <div className="flex-1 flex flex-row flex-wrap items-start justify-between py-0 pr-px pl-0 box-border max-w-full gap-[20px]">
                      <div className="w-[121.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                        <div className="relative leading-[160%] font-semibold inline-block min-w-[78px] z-[2]">
                          Mathe Struijs
                        </div>
                      </div>
                      <div className="w-[124.1px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                        <div className="w-[58.3px] relative leading-[160%] font-semibold inline-block z-[2]">
                          House
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                        <div className="relative leading-[160%] font-semibold inline-block min-w-[83px] z-[2]">
                          Documentary
                        </div>
                      </div>
                      <div className="w-[85.9px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                        <div className="self-stretch relative leading-[160%] font-semibold z-[2]">
                          4/5/2020
                        </div>
                      </div>
                      <div className="w-[93.5px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                        <div className="self-stretch relative leading-[160%] font-semibold whitespace-nowrap z-[2]">
                          $2,999.00
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18.4px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[24.1px] max-w-full mq1025:flex-wrap">
                      <input
                        className="m-0 h-[23px] w-[21.5px]"
                        type="checkbox"
                      />
                      <div className="flex-[0.5903] flex flex-row items-start justify-start py-0 pr-[90.8px] pl-0 box-border min-w-[127px] mq1025:flex-1">
                        <div className="w-[102px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                          <div className="self-stretch relative leading-[160%] font-semibold z-[3]">
                            Mathe Struijs
                          </div>
                        </div>
                        <div className="h-[19px] w-0 relative leading-[160%] font-semibold inline-block z-[2] ml-[-101.6px]" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border min-w-[127px] mq1025:flex-1">
                        <div className="w-[78.2px] relative leading-[160%] font-semibold inline-block z-[2]">
                          House
                        </div>
                      </div>
                      <div className="w-[153.9px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                        <div className="w-[58.3px] relative leading-[160%] font-semibold inline-block z-[2]">
                          Documentary
                        </div>
                      </div>
                      <div className="w-[156.9px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                        <div className="w-[85.9px] relative leading-[160%] font-semibold inline-block z-[2]">
                          4/5/2020
                        </div>
                      </div>
                      <div className="w-[139.7px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                        <div className="w-[76.7px] relative leading-[160%] font-semibold inline-block whitespace-nowrap z-[2]">
                          $2,999.00
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                        {/* <img
                              className="w-[30.7px] h-5 relative overflow-hidden shrink-0 z-[2]"
                              loading="lazy"
                              alt=""
                              src="/dots.svg"
                            /> */}
                        <div className="flex flex-shrink-0 justify-center items-center pl-[0.3125rem] pr-[0.3125rem] p-0 w-[1.875rem] h-5">
                          <svg width={24} height={4} viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.18582 2.83333C3.89156 2.83333 4.46367 2.46023 4.46367 2C4.46367 1.53976 3.89156 1.16666 3.18582 1.16666C2.48007 1.16666 1.90796 1.53976 1.90796 2C1.90796 2.46023 2.48007 2.83333 3.18582 2.83333Z" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.1309 2.83333C12.8366 2.83333 13.4087 2.46023 13.4087 2C13.4087 1.53976 12.8366 1.16666 12.1309 1.16666C11.4251 1.16666 10.853 1.53976 10.853 2C10.853 2.46023 11.4251 2.83333 12.1309 2.83333Z" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.0757 2.83333C21.7814 2.83333 22.3536 2.46023 22.3536 2C22.3536 1.53976 21.7814 1.16666 21.0757 1.16666C20.37 1.16666 19.7979 1.53976 19.7979 2C19.7979 2.46023 20.37 2.83333 21.0757 2.83333Z" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="self-stretch bg-additional-white flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[11px] max-w-full z-[1]">
                    <div className="self-stretch h-14 relative bg-additional-white hidden" />
                    <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-greyscale-100" />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-[18.4px] box-border max-w-full">
                      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1025:flex-wrap">
                        <div className="flex flex-row items-start justify-start py-0 pr-[75.2px] pl-0 gap-[24.5px]">
                          <input
                            className="m-0 h-[23px] w-[21.5px]"
                            type="checkbox"
                          />
                          <div className="relative leading-[160%] font-semibold inline-block min-w-[71px] z-[2]">
                            Ceil Tharme
                          </div>
                        </div>
                        <div className="w-[148.8px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                          <div className="w-[99.7px] relative leading-[160%] font-semibold inline-block z-[2]">
                            The Losers
                          </div>
                        </div>
                        <div className="w-[107.7px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                          <div className="w-[75.1px] relative leading-[160%] font-semibold inline-block z-[2]">
                            Comedy
                          </div>
                        </div>
                        <div className="w-[110.7px] flex flex-col items-start justify-start pt-[7px] pb-0 pr-5 pl-0 box-border">
                          <div className="w-[85.9px] relative leading-[160%] font-semibold inline-block z-[2]">
                            5/5/2020
                          </div>
                        </div>
                        <div className="w-[93.5px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                          <div className="self-stretch relative leading-[160%] font-semibold whitespace-nowrap z-[2]">
                            $2,699.00
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                          {/* <img
                            className="w-[30.7px] h-5 relative overflow-hidden shrink-0 z-[2]"
                            loading="lazy"
                            alt=""
                            src="/dots-1.svg"
                          /> */}
                          <div className="flex flex-shrink-0 justify-center items-center pl-[0.3125rem] pr-[0.3125rem] p-0 w-[1.875rem] h-5">
                            <svg width={24} height={4} viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.18582 2.83333C3.89156 2.83333 4.46367 2.46023 4.46367 2C4.46367 1.53976 3.89156 1.16666 3.18582 1.16666C2.48007 1.16666 1.90796 1.53976 1.90796 2C1.90796 2.46023 2.48007 2.83333 3.18582 2.83333Z" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M12.1309 2.83333C12.8366 2.83333 13.4087 2.46023 13.4087 2C13.4087 1.53976 12.8366 1.16666 12.1309 1.16666C11.4251 1.16666 10.853 1.53976 10.853 2C10.853 2.46023 11.4251 2.83333 12.1309 2.83333Z" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M21.0757 2.83333C21.7814 2.83333 22.3536 2.46023 22.3536 2C22.3536 1.53976 21.7814 1.16666 21.0757 1.16666C20.37 1.16666 19.7979 1.53976 19.7979 2C19.7979 2.46023 20.37 2.83333 21.0757 2.83333Z" stroke="#64748B" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Overview;
