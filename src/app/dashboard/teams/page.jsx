import React from "react";
import { MdPeopleOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
const Teams = () => {
  return (
    <>
      <section className="flex min-h-screen justify-center flex-col px-5 gap-10 md:px-10 py-20">
        <div className="grid gap-10 lg:grid-cols-5 grid-cols-1">
          <div className="bg-contrast lg:col-span-3 lg:col-start-2 rounded-lg shadow-lg lg:p-10 gap-5 p-5 flex flex-col justify-center ">
            <div className="lg:h-20 lg:w-20 w-10 h-10 flex items-center justify-center rounded-full">
              <MdPeopleOutline className="lg:h-14 lg:w-14 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-primary text-xl font-bold">
                Add team members
              </h3>
              <p className="text-disabled-gray lg:text-base text-sm">
                As the owner of this project, you can manage team member
                permissions or invite new members.
              </p>
            </div>

            <div className="flex gap-3 w-full lg:text-base text-sm lg:items-center lg:flex-row flex-col">
              <input
                type="email"
                placeholder="Enter an email address"
                className="border shadow px-3 py-2 rounded-lg flex-1 bg-transparent"
              />
              <button className="font-bold rounded-lg shadow text-center border lg:py-2 lg:px-5 p-2 w-max">
                Send Invite
              </button>
            </div>
            <h3 className="text-dark-blue lg:text-xl text-lg font-bold">
              Team members previously added to projects
            </h3>
            <div className="divide-y-2">
              {people.map((items, index) => {
                return (
                  <>
                    <PeopleList items={items} key={index} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const PeopleList = ({ items }) => {
  return (
    <div className=" px-2 py-5 flex justify-between">
      <div className="flex lg:gap-3 gap-2 items-center">
        <img
          src={items.imageUrl}
          alt={items.name}
          className="h-10 aspect-square rounded-full object-cover"
        />
        <div>
          <h3 className="font-bold lg:text-base text-sm">{items.name}</h3>
          <span className="lg:text-sm text-xs text-gray-500 font-semibold">
            {items.role}
          </span>
        </div>
      </div>
      <button className="flex text-disabled-gray font-semibold lg:text-sm text-xs items-center gap-1">
        <BiEdit className="lg:w-5 lg:h-5 w-3 h-3" />
        Edit
      </button>
    </div>
  );
};

const people = [
  {
    name: "Gaurav Budhrani",
    title: "CEO",
    role: "Admin",
    imageUrl: "/assets/gaurav.jpeg",
  },
  {
    name: "Inder Preet Singh",
    title: "CTO",
    role: "Admin",
    imageUrl: "/assets/inder.png",
  },
  {
    name: "Jane Cooper",
    title: "CFO",
    role: "Admin",
    imageUrl: "/assets/inder.png",
  },
  {
    name: "Leslie Alexander",
    title: "Account manager",
    role: "Billing",
    imageUrl: "/assets/inder.png",
  },
];

export default Teams;
