import React from 'react';
import { useState } from 'react';
import PricingTable from '.';

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly');
  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links cs_style1 cs_mp0 cs_pricing_control">
        <li
          className={tab === 'monthly' ? 'active' : ''}
          onClick={() => setTab('monthly')}
        >
          <span>Monthly</span>
          <span className="cs_switch"></span>
        </li>
        <li
          className={tab === 'yearly' ? 'active' : ''}
          onClick={() => setTab('yearly')}
        >
          <span>Yearly</span>
        </li>
      </ul>
      <div className="row cs_gap_y_30">
        <div className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title="Weekend Warrior"
              subTitle="A snapshot of our clubhouse data and API access to the clubhouse data in our DB."
              price="100"
              currency="$"
              timeline="+ $9.99 monthly"
              features={[
                'Course Address + GPS Location',
                'Clubhouse Contact Information',
                'Tee Boxes Offered',
                'Total Length',
                'Number of Holes',
                'Course Rating + Slope',
                'Other Miscellaneous Information',
                'API Access for consistent updates',
              ]}
              btnText="Choose Package"
              btnLink="/"
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title="Weekend Warrior"
              subTitle="A snapshot of our clubhouse data and API access to the clubhouse data in our DB."
              price="50"
              currency="$"
              timeline="+ $89.99 yearly"
              features={[
                'Course Address + GPS Location',
                'Clubhouse Contact Information',
                'Tee Boxes Offered',
                'Total Length',
                'Number of Holes',
                'Course Rating + Slope',
                'Other Miscellaneous Information',
                'API Access for consistent updates',
              ]}
              btnText="Choose Package"
              btnLink="/"
            />
          )}
        </div>
        <div className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title="Scratch Golfer"
              subTitle="A one-time purchase of a snapshot of our ENTIRE database."
              price="200"
              currency="$"
              timeline=""
              features={[
                'Access to 100% of our data',
                'Scorecard Information for Courses',
                'Hole Distance',
                'Hole Par',
                'Hole Handicap',
                'Access to our data in any format of your choice. (Excel, CSV, JSON, SQL, etc.)'
              ]}
              btnText="Choose Package"
              btnLink="/"
              popular
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title="Scratch Golfer"
              subTitle="A one-time purchase of a snapshot of our ENTIRE database."
              price="200"
              currency="$"
              timeline=""
              features={[
                'Access to 100% of our data',
                'Scorecard Information for Courses',
                'Hole Distance',
                'Hole Par',
                'Hole Handicap',
                'Access to our data in any format of your choice. (Excel, CSV, JSON, SQL, etc.)'
              ]}
              btnText="Choose Package"
              btnLink="/"
              popular
            />
          )}
        </div>
        <div className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title="Tour Pro"
              subTitle="Our ultimate package. A complete snapshot of the database as well as FULL API access."
              price="200"
              currency="$"
              timeline="+ $29.99 monthly"
              features={[
                'All Features of Lower Packages',
                'Key to Our State of the Art API',
                'Data Held on Our Server',
                'Consistent Updates to the Data'
              ]}
              btnText="Choose Package"
              btnLink="/"
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title="Tour Pro"
              subTitle="Our ultimate package. A complete snapshot of the database as well as FULL API access."
              price="200"
              currency="$"
              timeline="+ $299.99 yearly"
              features={[
                'All Features of Lower Packages',
                'Key to Our State of the Art API',
                'Data Held on Our Server',
                'Consistent Updates to the Data'
              ]}
              btnText="Choose Package"
              btnLink="/"
            />
          )}
        </div>
      </div>
    </div>
  );
}
