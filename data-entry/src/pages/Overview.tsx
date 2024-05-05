import React from "react";

const Overview = () => {
  return (
    <>
      <div className="w-full p-5 flex space-between">
        <div className="flex gap-3">
          <div className="flex flex-shrink-0 justify-center items-center p-1 w-6 h-6">
            <svg
              width={18}
              height={14}
              viewBox="0 0 18 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H17"
                stroke="#64748B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 7H17"
                stroke="#64748B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 13H17"
                stroke="#64748B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="logo flex flex-shrink-0 justify-end items-start w-[8.6875rem] h-[1.8125rem] gap-2">
            <svg
              width={28}
              height={29}
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.529798 4.87654C0 6.15559 0 7.77706 0 11.02V17.98C0 21.223 0 22.8444 0.529798 24.1235C1.2362 25.8289 2.59113 27.1838 4.29652 27.8902C5.57557 28.42 7.19704 28.42 10.44 28.42H17.4C20.643 28.42 22.2644 28.42 23.5435 27.8902C25.2489 27.1838 26.6038 25.8289 27.3102 24.1235C27.84 22.8444 27.84 21.223 27.84 17.98V11.02C27.84 7.77706 27.84 6.15559 27.3102 4.87654C26.6038 3.17114 25.2489 1.81621 23.5435 1.10982C22.2644 0.580017 20.643 0.580017 17.4 0.580017H10.44C7.19705 0.580017 5.57557 0.580017 4.29652 1.10982C2.59113 1.81621 1.2362 3.17114 0.529798 4.87654ZM16.0554 8.2023C16.0852 8.094 15.9591 8.01071 15.8713 8.08072L8.10189 14.2711C8.02774 14.3301 8.05193 14.4484 8.14332 14.4736L12.2847 15.6164C12.3465 15.6334 12.3828 15.6973 12.3657 15.759L11.0515 20.5217C11.0217 20.63 11.1478 20.7133 11.2356 20.6432L19.005 14.4529C19.0792 14.3938 19.055 14.2756 18.9636 14.2504L14.8221 13.1076C14.7604 13.0906 14.7241 13.0267 14.7412 12.9649L16.0554 8.2023Z"
                fill="#2563EB"
              />
            </svg>
            <div className="hiphonic text-slate-900 font-['Inter'] text-[1.4375rem] font-bold leading-[125%]">
              XYZ shop
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[1190px] h-[5.5rem] bg-white">
          <div className="flex-shrink-0 w-10 h-10 rounded-full">
            <div className="flex flex-shrink-0 justify-center items-center pt-[0.1875rem] pb-[0.1875rem] px-1 w-6 h-6">
              <svg
                width={18}
                height={20}
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 3C7 2.46957 7.21071 1.96086 7.58579 1.58579C7.96086 1.21071 8.46957 1 9 1C9.53043 1 10.0391 1.21071 10.4142 1.58579C10.7893 1.96086 11 2.46957 11 3C12.1484 3.54303 13.1274 4.38833 13.8321 5.4453C14.5367 6.50227 14.9404 7.73107 15 9V12C15.0753 12.6217 15.2954 13.2171 15.6428 13.7381C15.9902 14.2592 16.4551 14.6914 17 15H1C1.54494 14.6914 2.00981 14.2592 2.35719 13.7381C2.70457 13.2171 2.92474 12.6217 3 12V9C3.05956 7.73107 3.4633 6.50227 4.16795 5.4453C4.8726 4.38833 5.85159 3.54303 7 3"
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 15V16C6 16.7956 6.31607 17.5587 6.87868 18.1213C7.44129 18.6839 8.20435 19 9 19C9.79565 19 10.5587 18.6839 11.1213 18.1213C11.6839 17.5587 12 16.7956 12 16V15"
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <svg
              width={8}
              height={8}
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx={4} cy={4} r="3.5" fill="#ED4F9D" stroke="white" />
            </svg>
          </div>
          <div className="inline-flex items-center gap-3">
            <div className="flex justify-center items-center w-12 h-12">
              <div className="lightgray 50% / cover no-repeat] flex-shrink-0 w-12 h-12 bg-[url(<path-to-image>)" />
            </div>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#94A3B8"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-start w-[1440px] bg-slate-50">
        <div className="flex-shrink-0 w-[15.625rem] h-[1109px] bg-white">
          <div className="w-[15.625rem] h-px bg-slate-100" />
          <div className="inline-flex flex-col items-start gap-2">
            <div className="flex items-center gap-5 pr-6 w-[15.625rem]">
              <div className="flex-shrink-0 w-1 h-8 rounded-tr rounded-br bg-blue-600" />
              <div className="flex items-center pr-[5.4375rem] py-3 pl-0">
                <div className="flex items-center gap-4">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.24996 3.66669H4.58329C4.07703 3.66669 3.66663 4.07709 3.66663 4.58335V8.25002C3.66663 8.75628 4.07703 9.16669 4.58329 9.16669H8.24996C8.75622 9.16669 9.16663 8.75628 9.16663 8.25002V4.58335C9.16663 4.07709 8.75622 3.66669 8.24996 3.66669Z"
                      stroke="#2563EB"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.4166 3.66669H13.75C13.2437 3.66669 12.8333 4.07709 12.8333 4.58335V8.25002C12.8333 8.75628 13.2437 9.16669 13.75 9.16669H17.4166C17.9229 9.16669 18.3333 8.75628 18.3333 8.25002V4.58335C18.3333 4.07709 17.9229 3.66669 17.4166 3.66669Z"
                      stroke="#2563EB"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.24996 12.8334H4.58329C4.07703 12.8334 3.66663 13.2438 3.66663 13.75V17.4167C3.66663 17.9229 4.07703 18.3334 4.58329 18.3334H8.24996C8.75622 18.3334 9.16663 17.9229 9.16663 17.4167V13.75C9.16663 13.2438 8.75622 12.8334 8.24996 12.8334Z"
                      stroke="#2563EB"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.4166 12.8334H13.75C13.2437 12.8334 12.8333 13.2438 12.8333 13.75V17.4167C12.8333 17.9229 13.2437 18.3334 13.75 18.3334H17.4166C17.9229 18.3334 18.3333 17.9229 18.3333 17.4167V13.75C18.3333 13.2438 17.9229 12.8334 17.4166 12.8334Z"
                      stroke="#2563EB"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="overview-1 text-blue-600 font-['Inter'] font-bold leading-[150%]">
                    Overview
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 py-0 px-6 w-[15.625rem]">
              <div className="flex flex-shrink-0 items-center gap-20 w-[12.625rem] h-12">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center pb-[0.1875rem] p-0 w-[1.375rem] h-[1.375rem]">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4167 4.41669H2.58333C1.57081 4.41669 0.75 5.2375 0.75 6.25002V14.5C0.75 15.5125 1.57081 16.3334 2.58333 16.3334H15.4167C16.4292 16.3334 17.25 15.5125 17.25 14.5V6.25002C17.25 5.2375 16.4292 4.41669 15.4167 4.41669Z"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.33337 4.41667V2.58333C5.33337 2.0971 5.52653 1.63079 5.87035 1.28697C6.21416 0.943154 6.68048 0.75 7.16671 0.75H10.8334C11.3196 0.75 11.7859 0.943154 12.1297 1.28697C12.4736 1.63079 12.6667 2.0971 12.6667 2.58333V4.41667"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 9V9.00917"
                        stroke="#64748B"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.75 9.91669C3.30895 11.2061 6.13453 11.8778 9 11.8778C11.8655 11.8778 14.6911 11.2061 17.25 9.91669"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="job_search text-slate-500 font-['Inter'] font-medium leading-[150%]">
                    Sales
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 py-0 px-6 w-[15.625rem]">
              <div className="flex flex-shrink-0 items-center gap-20 w-[12.625rem] h-12">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center pl-[0.1875rem] pr-[0.1875rem] p-0 w-[1.375rem] h-[1.375rem]">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5 2.58331H3.49996C2.48744 2.58331 1.66663 3.40412 1.66663 4.41665V15.4166C1.66663 16.4292 2.48744 17.25 3.49996 17.25H14.5C15.5125 17.25 16.3333 16.4292 16.3333 15.4166V4.41665C16.3333 3.40412 15.5125 2.58331 14.5 2.58331Z"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6666 0.75V4.41667"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.33325 0.75V4.41667"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.66663 8.08334H16.3333"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.08325 11.75H8.99992"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 11.75V14.5"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="schedule text-slate-500 font-['Inter'] font-medium leading-[150%]">
                    Customers
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 py-0 px-6 w-[15.625rem]">
              <div className="flex flex-shrink-0 items-center gap-20 w-[12.625rem] h-12">
                <div className="flex items-center gap-4">
                  <div className="flex justify-center items-center p-0 w-[1.375rem] h-[1.375rem]">
                    <svg
                      width={18}
                      height={19}
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 6.33334V10L10.8333 11.8333"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.795776 9.08333C1.00119 7.06672 1.94185 5.19631 3.43828 3.82897C4.93471 2.46163 6.88216 1.69306 8.90908 1.66991C10.936 1.64676 12.9005 2.37064 14.4278 3.70345C15.955 5.03626 16.9382 6.88469 17.1896 8.89609C17.441 10.9075 16.9431 12.941 15.7909 14.6088C14.6387 16.2765 12.9129 17.4617 10.9426 17.9382C8.97237 18.4147 6.89565 18.1491 5.10869 17.1922C3.32173 16.2353 0.795776 12.75 0.795776 12.75M0.795776 17.3333V12.75M0.795776 12.75H5.37911"
                        stroke="#64748B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="history-1 text-slate-500 font-['Inter'] font-medium leading-[150%]">
                    Inventory
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 py-0 px-6 w-[15.625rem]">
              <div className="flex flex-shrink-0 items-center gap-20 w-[12.625rem] h-12">
                <div className="flex items-center gap-4">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 16.2708L5.34231 19.2454L6.42306 12.9452L1.83972 8.48376L8.16472 7.56709L10.9936 1.83517L13.8224 7.56709L20.1474 8.48376L15.5641 12.9452L16.6448 19.2454L11 16.2708Z"
                      stroke="#64748B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="events text-slate-500 font-['Inter'] font-medium leading-[150%]">
                    Profit/Loss
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center gap-4 py-0 px-4 w-[13.625rem] h-12 rounded-xl">
            <div className="flex flex-shrink-0 justify-center items-center p-0.5 w-[1.375rem] h-[1.375rem]">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.46458 1.95725C7.85508 0.347583 10.1449 0.347583 10.5354 1.95725C10.594 2.19907 10.7089 2.42363 10.8707 2.61267C11.0324 2.8017 11.2366 2.94987 11.4664 3.0451C11.6963 3.14033 11.9454 3.17995 12.1935 3.16071C12.4415 3.14148 12.6816 3.06394 12.894 2.93442C14.3084 2.07275 15.9282 3.69158 15.0665 5.10692C14.9372 5.31927 14.8597 5.55914 14.8406 5.80704C14.8214 6.05494 14.8609 6.30387 14.9561 6.5336C15.0512 6.76332 15.1992 6.96736 15.388 7.12913C15.5768 7.2909 15.8012 7.40583 16.0428 7.46458C17.6524 7.85508 17.6524 10.1449 16.0428 10.5354C15.8009 10.594 15.5764 10.7089 15.3873 10.8707C15.1983 11.0324 15.0501 11.2366 14.9549 11.4664C14.8597 11.6963 14.8201 11.9454 14.8393 12.1935C14.8585 12.4415 14.9361 12.6816 15.0656 12.894C15.9273 14.3084 14.3084 15.9282 12.8931 15.0665C12.6807 14.9372 12.4409 14.8597 12.193 14.8406C11.9451 14.8214 11.6961 14.8609 11.4664 14.9561C11.2367 15.0512 11.0326 15.1992 10.8709 15.388C10.7091 15.5768 10.5942 15.8012 10.5354 16.0428C10.1449 17.6524 7.85508 17.6524 7.46458 16.0428C7.40599 15.8009 7.29113 15.5764 7.12935 15.3873C6.96757 15.1983 6.76344 15.0501 6.53357 14.9549C6.3037 14.8597 6.0546 14.8201 5.80653 14.8393C5.55846 14.8585 5.31844 14.9361 5.106 15.0656C3.69158 15.9273 2.07183 14.3084 2.9335 12.8931C3.06284 12.6807 3.14025 12.4409 3.15944 12.193C3.17863 11.9451 3.13906 11.6961 3.04393 11.4664C2.94881 11.2367 2.80082 11.0326 2.612 10.8709C2.42318 10.7091 2.19885 10.5942 1.95725 10.5354C0.347583 10.1449 0.347583 7.85508 1.95725 7.46458C2.19907 7.40599 2.42363 7.29113 2.61267 7.12935C2.8017 6.96757 2.94987 6.76344 3.0451 6.53357C3.14033 6.3037 3.17995 6.0546 3.16071 5.80653C3.14148 5.55846 3.06394 5.31844 2.93442 5.106C2.07275 3.69158 3.69158 2.07183 5.10692 2.9335C6.02358 3.49083 7.21158 2.99767 7.46458 1.95725Z"
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75Z"
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="settings-1 text-slate-500 font-['Inter'] text-sm font-medium leading-[160%]">
              Settings
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center gap-4 py-0 px-4 w-[13.625rem] h-12 rounded-xl">
            <div className="flex flex-shrink-0 justify-center items-center pt-[0.1875rem] pb-[0.1875rem] px-0 w-[1.375rem] h-[1.375rem]">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8333 5.33333V3.5C10.8333 3.01377 10.6402 2.54745 10.2964 2.20363C9.95254 1.85982 9.48623 1.66666 9 1.66666H2.58333C2.0971 1.66666 1.63079 1.85982 1.28697 2.20363C0.943154 2.54745 0.75 3.01377 0.75 3.5V14.5C0.75 14.9862 0.943154 15.4525 1.28697 15.7964C1.63079 16.1402 2.0971 16.3333 2.58333 16.3333H9C9.48623 16.3333 9.95254 16.1402 10.2964 15.7964C10.6402 15.4525 10.8333 14.9862 10.8333 14.5V12.6667"
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.41663 9H17.25M17.25 9L14.5 6.25M17.25 9L14.5 11.75"
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="log_out text-slate-500 font-['Inter'] text-sm font-medium leading-[160%]">
              Log Out
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-[1190px] h-[1109px] bg-slate-50">
          <div className="w-[1190px] h-px bg-slate-100" />
          <div className="welcome__mattew text-slate-900 font-['Inter'] text-2xl font-bold leading-[125%]">
            Welcome, Mattew
          </div>
          <div className="text-slate-500 font-['Inter'] leading-[160%]">
            Monday, 05 Agust 2022
          </div>
          <div className="flex items-center gap-6 w-[1126px] rounded-xl bg-white">
            <div className="card_summary_-_job_searcher flex flex-col justify-center items-start gap-4 py-5 px-6 bg-white">
              <div className="flex items-center self-stretch pr-[11.5625rem] body text-slate-500 font-['Inter'] text-sm font-semibold leading-[160%]">
                Total Revenue
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="flex items-center gap-4 self-stretch">
                  <div className="body-1 text-slate-900 font-['Inter'] text-2xl font-bold leading-[125%]">
                    $40,000
                  </div>
                  <div className="flex justify-center items-center py-1 px-2 rounded-full bg-green-50">
                    <div className="flex justify-center items-center pt-[0.1875rem] pb-[0.1875rem] pl-[0.3125rem] pr-[0.3125rem] w-4 h-4">
                      <svg
                        width={8}
                        height={12}
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 1.33334V10.6667"
                          stroke="#24D164"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.66667 4.00001L4 1.33334"
                          stroke="#24D164"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.33337 4.00001L4.00004 1.33334"
                          stroke="#24D164"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-[#24d164] font-['Inter'] text-xs font-medium leading-[160%]">
                      59%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-px h-[4.5rem] bg-slate-200" />
            <div className="card_summary_-_job_searcher-1 flex flex-col justify-center items-start gap-4 py-5 px-6 bg-white">
              <div className="flex items-center self-stretch pr-[14.9375rem] body-3 text-slate-500 font-['Inter'] text-sm font-semibold leading-[160%]">
                Orders
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="flex items-center gap-4 self-stretch">
                  <div className="body-4 text-slate-900 font-['Inter'] text-2xl font-bold leading-[125%]">
                    40,000
                  </div>
                  <div className="flex justify-center items-center py-1 px-2 rounded-full bg-pink-50">
                    <div className="flex justify-center items-center pt-[0.1875rem] pb-[0.1875rem] pl-[0.3125rem] pr-[0.3125rem] w-4 h-4">
                      <svg
                        width={8}
                        height={12}
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.33337 1.33334V10.6667"
                          stroke="#ED4F9D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.00004 8L4.33337 10.6667"
                          stroke="#ED4F9D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1.66675 8L4.33341 10.6667"
                          stroke="#ED4F9D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-[#ed4f9d] font-['Inter'] text-xs font-medium leading-[160%]">
                      9%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-px h-[4.5rem] bg-slate-200" />
            <div className="card_summary_-_job_searcher-2 flex flex-col justify-center items-start gap-4 py-5 px-6 bg-white">
              <div className="flex items-center self-stretch pr-[13.125rem] body-6 text-slate-500 font-['Inter'] text-sm font-semibold leading-[160%]">
                Customers
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <div className="flex items-center gap-4 self-stretch">
                  <div className="body-7 text-slate-900 font-['Inter'] text-2xl font-bold leading-[125%]">
                    40
                  </div>
                  <div className="flex justify-center items-center py-1 px-2 rounded-full bg-pink-50">
                    <div className="flex justify-center items-center pt-[0.1875rem] pb-[0.1875rem] pl-[0.3125rem] pr-[0.3125rem] w-4 h-4">
                      <svg
                        width={8}
                        height={12}
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.6665 1.33334V10.6667"
                          stroke="#ED4F9D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33317 8L3.6665 10.6667"
                          stroke="#ED4F9D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0.999756 8L3.66642 10.6667"
                          stroke="#ED4F9D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-[#ed4f9d] font-['Inter'] text-xs font-medium leading-[160%]">
                      59%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-px h-[4.5rem] bg-slate-200" />
          </div>
          <div className="flex-shrink-0 w-[662px] h-[22.75rem]">
            <div className="flex-shrink-0 w-[662px] h-[22.75rem] rounded-xl bg-white" />
            <div className="inline-flex flex-col items-start gap-1">
              <div className="text-slate-500 font-['Inter'] text-[.9375rem] font-bold leading-[160%]">
                Revenue over time
              </div>
            </div>
            <div className="inline-flex flex-col flex-shrink-0 justify-between items-end h-[12.6875rem]">
              <div className="text-slate-500 text-right font-['Inter'] text-xs leading-[160%]">
                40K
              </div>
              <div className="text-slate-500 text-right font-['Inter'] text-xs leading-[160%]">
                50K
              </div>
              <div className="text-slate-500 text-right font-['Inter'] text-xs leading-[160%]">
                30K
              </div>
              <div className="text-slate-500 text-right font-['Inter'] text-xs leading-[160%]">
                20K
              </div>
              <div className="text-slate-500 text-right font-['Inter'] text-xs leading-[160%]">
                10K
              </div>
            </div>
            <div className="w-[581.812px] h-0 bg-slate-100" />
            <div className="w-[581.812px] h-0 bg-slate-100" />
            <div className="w-[581.812px] h-0 bg-slate-100" />
            <div className="w-[581.812px] h-0 bg-slate-100" />
            <div className="w-[581.812px] h-0 bg-slate-100" />
            <svg
              width={29}
              height={33}
              viewBox="0 0 29 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_60_275)">
                <ellipse
                  cx="14.3095"
                  cy="15.6383"
                  rx="6.23688"
                  ry="7.74468"
                  fill="white"
                />
              </g>
              <ellipse
                cx="14.3095"
                cy="15.6383"
                rx="2.67295"
                ry="3.31915"
                fill="#2563EB"
              />
              <defs>
                <filter
                  id="filter0_d_60_275"
                  x="0.0726318"
                  y="0.893616"
                  width="28.4738"
                  height="31.4894"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy={1} />
                  <feGaussianBlur stdDeviation={4} />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.145098 0 0 0 0 0.388235 0 0 0 0 0.921569 0 0 0 0.14 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_60_275"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_60_275"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div className="w-px h-[7.9375rem] bg-slate-300" />
            <div className="frame_11 inline-flex flex-col justify-center items-start gap-1 py-2 px-3 rounded-xl border border-slate-900/[.20] bg-slate-900/[.70]">
              <div className="text-white font-['Inter'] text-xs font-bold leading-[160%]">
                $40,567.88
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-[1124px] h-[17.1875rem]">
            <div className="flex-shrink-0 w-[1124px] h-[17.1875rem] rounded-xl bg-white" />
            <div className="orders text-slate-500 font-['Inter'] text-[.9375rem] font-bold leading-[160%]">
              Orders
            </div>
            <div className="flex-shrink-0 w-[1078px] h-10 rounded-lg bg-slate-50" />
            <svg
              width={22}
              height={14}
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_60_304)">
                <rect
                  x="0.901123"
                  y="0.5"
                  width="20.468"
                  height={13}
                  rx="3.5"
                  stroke="#E2E8F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_304">
                  <rect
                    width="21.468"
                    height={14}
                    fill="white"
                    transform="translate(0.401123)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="flex flex-shrink-0 justify-center items-center pl-[0.3125rem] pr-[0.3125rem] p-0 w-[1.875rem] h-5">
              <svg
                width={24}
                height={4}
                viewBox="0 0 24 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.18582 2.83333C3.89156 2.83333 4.46367 2.46023 4.46367 2C4.46367 1.53976 3.89156 1.16666 3.18582 1.16666C2.48007 1.16666 1.90796 1.53976 1.90796 2C1.90796 2.46023 2.48007 2.83333 3.18582 2.83333Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.1309 2.83333C12.8366 2.83333 13.4087 2.46023 13.4087 2C13.4087 1.53976 12.8366 1.16666 12.1309 1.16666C11.4251 1.16666 10.853 1.53976 10.853 2C10.853 2.46023 11.4251 2.83333 12.1309 2.83333Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0757 2.83333C21.7814 2.83333 22.3536 2.46023 22.3536 2C22.3536 1.53976 21.7814 1.16666 21.0757 1.16666C20.37 1.16666 19.7979 1.53976 19.7979 2C19.7979 2.46023 20.37 2.83333 21.0757 2.83333Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-shrink-0 w-[1078px] h-14 bg-white" />
            <svg
              width={22}
              height={14}
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_60_312)">
                <rect
                  x="0.901123"
                  y="0.5"
                  width="20.468"
                  height={13}
                  rx="3.5"
                  stroke="#E2E8F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_312">
                  <rect
                    width="21.468"
                    height={14}
                    fill="white"
                    transform="translate(0.401123)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="w-[8.8125rem] text-slate-500 font-['Inter'] text-xs font-medium leading-[160%]">
              Customer name
            </div>
            <div className="inline-flex items-center gap-3">
              <div className="text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
                Mathe Struijs
              </div>
            </div>
            <div className="inline-flex items-center gap-3">
              <div className="text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
                Ceil Tharme
              </div>
            </div>
            <div className="flex flex-shrink-0 justify-center items-center pl-[0.3125rem] pr-[0.3125rem] p-0 w-[1.875rem] h-5">
              <svg
                width={24}
                height={4}
                viewBox="0 0 24 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.18582 2.83332C3.89156 2.83332 4.46367 2.46023 4.46367 1.99999C4.46367 1.53975 3.89156 1.16666 3.18582 1.16666C2.48007 1.16666 1.90796 1.53975 1.90796 1.99999C1.90796 2.46023 2.48007 2.83332 3.18582 2.83332Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.1309 2.83332C12.8366 2.83332 13.4087 2.46023 13.4087 1.99999C13.4087 1.53975 12.8366 1.16666 12.1309 1.16666C11.4251 1.16666 10.853 1.53975 10.853 1.99999C10.853 2.46023 11.4251 2.83332 12.1309 2.83332Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0757 2.83332C21.7814 2.83332 22.3536 2.46023 22.3536 1.99999C22.3536 1.53975 21.7814 1.16666 21.0757 1.16666C20.37 1.16666 19.7979 1.53975 19.7979 1.99999C19.7979 2.46023 20.37 2.83332 21.0757 2.83332Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-shrink-0 w-[1078px] h-14 bg-white" />
            <svg
              width={22}
              height={14}
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_60_326)">
                <rect
                  x="0.901123"
                  y="0.5"
                  width="20.468"
                  height={13}
                  rx="3.5"
                  stroke="#E2E8F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_326">
                  <rect
                    width="21.468"
                    height={14}
                    fill="white"
                    transform="translate(0.401123)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="w-[6.375rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              Christine Hain
            </div>
            <div className="w-[7.75rem] text-slate-500 font-['Inter'] text-xs font-medium leading-[160%]">
              Product name
            </div>
            <div className="w-[4.875rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              Head On
            </div>
            <div className="w-[3.625rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              House
            </div>
            <div className="w-[6.1875rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              The Losers
            </div>
            <div className="inline-flex items-center gap-3"></div>
            <div className="w-[5.125rem] text-slate-500 font-['Inter'] text-xs font-medium leading-[160%]">
              Category
            </div>
            <div className="w-[3.625rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              Drama
            </div>
            <div className="w-[5.1875rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              Documentary
            </div>
            <div className="w-[4.6875rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              Comedy
            </div>
            <div className="w-[2.5625rem] text-slate-500 font-['Inter'] text-xs font-medium leading-[160%]">
              Date
            </div>
            <div className="w-[5.3125rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              3/2/2020
            </div>
            <div className="w-[5.3125rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              4/5/2020
            </div>
            <div className="w-[5.3125rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              5/5/2020
            </div>
            <div className="w-[2.875rem] text-slate-500 font-['Inter'] text-xs font-medium leading-[160%]">
              Price
            </div>
            <div className="w-[4.75rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              $399.00
            </div>
            <div className="w-[5.8125rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              $2,999.00
            </div>
            <div className="w-[5.8125rem] text-slate-900 font-['Inter'] text-xs font-semibold leading-[160%]">
              $2,699.00
            </div>
            <div className="flex flex-shrink-0 justify-center items-center pl-[0.3125rem] pr-[0.3125rem] p-0 w-[1.875rem] h-5">
              <svg
                width={24}
                height={4}
                viewBox="0 0 24 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.18582 2.83334C3.89156 2.83334 4.46367 2.46024 4.46367 2C4.46367 1.53977 3.89156 1.16667 3.18582 1.16667C2.48007 1.16667 1.90796 1.53977 1.90796 2C1.90796 2.46024 2.48007 2.83334 3.18582 2.83334Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.1309 2.83334C12.8366 2.83334 13.4087 2.46024 13.4087 2C13.4087 1.53977 12.8366 1.16667 12.1309 1.16667C11.4251 1.16667 10.853 1.53977 10.853 2C10.853 2.46024 11.4251 2.83334 12.1309 2.83334Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0757 2.83334C21.7814 2.83334 22.3536 2.46024 22.3536 2C22.3536 1.53977 21.7814 1.16667 21.0757 1.16667C20.37 1.16667 19.7979 1.53977 19.7979 2C19.7979 2.46024 20.37 2.83334 21.0757 2.83334Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex-shrink-0 w-[1078px] h-14 bg-white" />
            <svg
              width={22}
              height={14}
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_60_308)">
                <rect
                  x="0.901123"
                  y="0.5"
                  width="20.468"
                  height={13}
                  rx="3.5"
                  stroke="#E2E8F0"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_308">
                  <rect
                    width="21.468"
                    height={14}
                    fill="white"
                    transform="translate(0.401123)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="flex flex-shrink-0 justify-center items-center pl-[0.3125rem] pr-[0.3125rem] p-0 w-[1.875rem] h-5">
              <svg
                width={24}
                height={4}
                viewBox="0 0 24 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.18582 2.83334C3.89156 2.83334 4.46367 2.46024 4.46367 2C4.46367 1.53977 3.89156 1.16667 3.18582 1.16667C2.48007 1.16667 1.90796 1.53977 1.90796 2C1.90796 2.46024 2.48007 2.83334 3.18582 2.83334Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.1309 2.83334C12.8366 2.83334 13.4087 2.46024 13.4087 2C13.4087 1.53977 12.8366 1.16667 12.1309 1.16667C11.4251 1.16667 10.853 1.53977 10.853 2C10.853 2.46024 11.4251 2.83334 12.1309 2.83334Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.0757 2.83334C21.7814 2.83334 22.3536 2.46024 22.3536 2C22.3536 1.53977 21.7814 1.16667 21.0757 1.16667C20.37 1.16667 19.7979 1.53977 19.7979 2C19.7979 2.46024 20.37 2.83334 21.0757 2.83334Z"
                  stroke="#64748B"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-[1078px] h-px bg-slate-100" />
            <div className="w-[1078px] h-px bg-slate-100" />
          </div>
          <div className="frame_77 inline-flex items-start">
            <div className="w-[1.9375rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Jan
            </div>
            <div className="w-[1.9375rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Feb
            </div>
            <div className="w-8 text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Mar
            </div>
            <div className="w-[1.8125rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Apr
            </div>
            <div className="w-[1.8125rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              May
            </div>
            <div className="w-[1.8125rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Jun
            </div>
            <div className="w-[1.8125rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Jul
            </div>
            <div className="w-[1.8125rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Sep
            </div>
            <div className="w-[1.8125rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Aug
            </div>
            <div className="w-[1.8125rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Oct
            </div>
            <div className="w-[1.8125rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Nov
            </div>
            <div className="w-[1.8125rem] text-slate-500 font-['Inter'] text-xs leading-[160%]">
              Dec
            </div>
          </div>
          <div className="inline-flex flex-shrink-0 justify-end items-center h-[22.75rem]">
            <div className="flex-shrink-0 w-[435px] h-[22.75rem] rounded-xl bg-white" />
            <div className="tittle-3 flex items-center w-[16.3125rem]">
              <div className="flex items-center gap-1">
                <div className="tittle-5 text-slate-500 font-['Inter'] text-[.9375rem] font-bold leading-[160%]">
                  Orders by categories
                </div>
              </div>
            </div>
            <svg
              width={163}
              height={250}
              viewBox="0 0 163 250"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_60_369)">
                <path
                  d="M23.2345 15C46.4579 15 69.1094 22.204 88.0664 35.6189C107.023 49.0338 121.352 67.999 129.077 89.8998C136.803 111.801 137.544 135.559 131.199 157.898C124.854 180.238 111.735 200.06 93.6515 214.63L63.9871 177.813C74.4528 169.381 82.045 157.91 85.717 144.981C89.389 132.052 88.96 118.302 84.4892 105.628C80.0184 92.953 71.7258 81.9772 60.7548 74.2136C49.7838 66.45 36.6746 62.2808 23.2345 62.2808V15Z"
                  fill="#2563EB"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_60_369"
                  x="0.234619"
                  y={0}
                  width="162.234"
                  height="249.63"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx={2} dy={10} />
                  <feGaussianBlur stdDeviation="12.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.278431 0 0 0 0 0.333333 0 0 0 0 0.411765 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_60_369"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_60_369"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <svg
              width={208}
              height={208}
              viewBox="0 0 208 208"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M207.642 104.235C207.642 161.345 161.345 207.642 104.234 207.642C47.1243 207.642 0.827393 161.345 0.827393 104.235C0.827393 47.1244 47.1243 0.827423 104.234 0.827423C161.345 0.827423 207.642 47.1244 207.642 104.235ZM29.773 104.235C29.773 145.358 63.1105 178.696 104.234 178.696C145.358 178.696 178.696 145.358 178.696 104.235C178.696 63.1106 145.358 29.773 104.234 29.773C63.1105 29.773 29.773 63.1106 29.773 104.235Z"
                fill="#F8FAFC"
              />
            </svg>
            <svg
              width={139}
              height={50}
              viewBox="0 0 139 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M138.016 25.1853C118.643 41.5724 93.9207 50.2644 68.5549 49.6069C43.189 48.9493 18.9503 38.9882 0.45211 21.6194L20.2654 0.517746C33.5856 13.0247 51.0394 20.1975 69.3049 20.671C87.5704 21.1445 105.372 14.8856 119.323 3.08551L138.016 25.1853Z"
                fill="#38BDF8"
              />
            </svg>
            <div className="inline-flex flex-col items-center gap-1">
              <div className="body-27 text-slate-900 text-center font-['Inter'] text-lg font-bold leading-[140%]">
                2574
              </div>
              <div className="text-slate-500 text-center font-['Inter'] text-xs leading-[160%]">
                Total
              </div>
            </div>
            <div className="amount-3 flex flex-shrink-0 justify-center items-center gap-2.5 p-2 w-[6.875rem] h-[1.875rem] rounded bg-white text-slate-900 text-center font-['Inter'] text-xs font-bold leading-[160%]">
              Drama: 40%
            </div>
            <div className="flex flex-shrink-0 justify-center items-center gap-2 w-[3.25rem] h-[1.1875rem]">
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded bg-blue-600" />
              <div className="text-slate-500 font-['Inter'] text-xs font-semibold leading-[160%]">
                SCi-fi
              </div>
            </div>
            <div className="flex flex-shrink-0 justify-center items-center gap-2 w-14 h-[1.1875rem]">
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded bg-[#b586f1]" />
              <div className="text-slate-500 font-['Inter'] text-xs font-semibold leading-[160%]">
                Drama
              </div>
            </div>
            <div className="flex flex-shrink-0 justify-end items-center gap-2 w-14 h-[1.1875rem]">
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded bg-[#25dfeb]" />
              <div className="text-slate-500 font-['Inter'] text-xs font-semibold leading-[160%]">
                Comedy
              </div>
            </div>
            <div className="flex flex-shrink-0 justify-center items-center gap-2 w-14 h-[1.1875rem]">
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded bg-[#d8db4c]" />
              <div className="text-slate-500 font-['Inter'] text-xs font-semibold leading-[160%]">
                Horror
              </div>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2 pr-[0.4375rem] w-14 h-[1.1875rem]">
              <div className="flex-shrink-0 w-2.5 h-2.5 rounded bg-[#eb2555]" />
              <div className="text-slate-500 font-['Inter'] text-xs font-semibold leading-[160%]">
                Docu
              </div>
            </div>
          </div>
          <div className="flex flex-shrink-0 justify-center items-center gap-1 w-[9.5625rem] h-8 rounded-lg"></div>
          <div className="inline-flex flex-shrink-0 items-center gap-1 p-2 h-8 rounded-lg border border-slate-200">
            <div className="text-slate-500 text-right font-['Inter'] text-xs font-semibold leading-[160%]">
              This Year
            </div>
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#64748B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="w-px h-[900px] bg-slate-100" />
      </div>
    </>
  );
};

export default Overview;
