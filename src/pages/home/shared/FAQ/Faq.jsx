import React from "react";

const Faq = () => {
  return (
    <div className="mb-14 lg:px-20 px-5">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">Frequently Asked Questions (FAQ)</h1>
        <p className="text-base text-gray-600">
          Enhance your delivery experience with Profast Courier Tracking. <br />
          Track parcels easily, know delivery times, and manage shipments effortlessly!
        </p>
      </div>

      <div className="space-y-3">
        <div className="collapse collapse-arrow bg-white border border-gray-300 shadow-sm rounded-lg">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold text-lg text-gray-800">
            How do I track my parcel?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            Enter your tracking number on the homepage tracking section and click "Track" to view your parcel status instantly.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-gray-300 shadow-sm rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg text-gray-800">
            What should I do if my parcel is delayed?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            Contact our customer support with your tracking number for detailed assistance and updated delivery information.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-gray-300 shadow-sm rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg text-gray-800">
            Can I change my delivery address after dispatch?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            Delivery address changes are only possible before dispatch. Contact support immediately if you need to update your address.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-gray-300 shadow-sm rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg text-gray-800">
            How long does delivery take?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            Standard delivery takes 2-3 business days, while express delivery options are available for next-day arrival in select areas.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-white border border-gray-300 shadow-sm rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg text-gray-800">
            What payment methods do you accept for shipping?
          </div>
          <div className="collapse-content text-sm text-gray-700">
            We accept all major debit/credit cards, mobile banking, and cash on delivery for your convenience.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
