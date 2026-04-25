import React from 'react';

const cards = [
  { badge: '🎉 Launch', title: 'Zostel Guwahati is your next stop!', desc: "Explore Northeast India's largest city with the best hostel in Guwahati, Assam", query: 'guwahati assam india' },
  { badge: '🎉 Launch', title: 'Greetings from Zo Selections Gokarna by Zostel', desc: 'Dive into a premium & curated coastal getaway', query: 'gokarna beach india' },
  { badge: '🎉 Launch', title: 'Escape to Zostel McLeodganj', desc: 'Your one-stop spot for all things fun & adventurous in McLeodganj', query: 'mcleodganj himachal india' },
  { badge: '✨ Introducing', title: 'Zo Selections Jaipur by Zostel', desc: 'Get ready to indulge in a whole new side of Jaipur', query: 'jaipur rajasthan india' },
  { badge: '🎉 Launch', title: 'Zostel arrived!', desc: 'Your base in the heart of Himalayas', query: 'himalayas india hostel' },
  { badge: '🎉 Launch', title: 'Zostel Guwahati is your next stop!', desc: "Explore Northeast India's largest city with the best hostel in Guwahati, Assam", query: 'guwahati assam india' },
  { badge: '🎉 Launch', title: 'Greetings from Zo Selections Gokarna by Zostel', desc: 'Dive into a premium & curated coastal getaway', query: 'gokarna beach india' },
  { badge: '🎉 Launch', title: 'Escape to Zostel McLeodganj', desc: 'Your one-stop spot for all things fun & adventurous in McLeodganj', query: 'mcleodganj himachal india' },
  { badge: '✨ Introducing', title: 'Zo Selections Jaipur by Zostel', desc: 'Get ready to indulge in a whole new side of Jaipur', query: 'jaipur rajasthan india' },
  { badge: '🎉 Launch', title: 'Zostel arrived!', desc: 'Your base in the heart of Himalayas', query: 'himalayas india hostel' },
  { badge: '🎉 Launch', title: 'Zostel Guwahati is your next stop!', desc: "Explore Northeast India's largest city with the best hostel in Guwahati, Assam", query: 'guwahati assam india' },
  { badge: '🎉 Launch', title: 'Greetings from Zo Selections Gokarna by Zostel', desc: 'Dive into a premium & curated coastal getaway', query: 'gokarna beach india' },
  { badge: '🎉 Launch', title: 'Escape to Zostel McLeodganj', desc: 'Your one-stop spot for all things fun & adventurous in McLeodganj', query: 'mcleodganj himachal india' },
  { badge: '✨ Introducing', title: 'Zo Selections Jaipur by Zostel', desc: 'Get ready to indulge in a whole new side of Jaipur', query: 'jaipur rajasthan india' },
  { badge: '🎉 Launch', title: 'Zostel arrived!', desc: 'Your base in the heart of Himalayas', query: 'himalayas india hostel' },
  { badge: '🎉 Launch', title: 'Zostel Guwahati is your next stop!', desc: "Explore Northeast India's largest city with the best hostel in Guwahati, Assam", query: 'guwahati assam india' },
  { badge: '🎉 Launch', title: 'Greetings from Zo Selections Gokarna by Zostel', desc: 'Dive into a premium & curated coastal getaway', query: 'gokarna beach india' },
  { badge: '🎉 Launch', title: 'Escape to Zostel McLeodganj', desc: 'Your one-stop spot for all things fun & adventurous in McLeodganj', query: 'mcleodganj himachal india' },
  { badge: '✨ Introducing', title: 'Zo Selections Jaipur by Zostel', desc: 'Get ready to indulge in a whole new side of Jaipur', query: 'jaipur rajasthan india' },
  { badge: '🎉 Launch', title: 'Zostel arrived!', desc: 'Your base in the heart of Himalayas', query: 'himalayas india hostel' },
]

function Card({ badge, title, desc, query }) {
  const img = `https://picsum.photos/seed/${encodeURIComponent(query)}/400/300`
  return (
    <div style={{ minWidth: 280, maxWidth: 280, borderRadius: 16, overflow: 'hidden', background: '#1a1a1a', flexShrink: 0 }}>
      <img src={img} alt={title} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
      <div style={{ padding: '16px' }}>
        <span style={{ background: '#d4f5d4', borderRadius: 20, padding: '4px 12px', fontSize: 13, fontWeight: 500 }}>{badge}</span>
        <h3 style={{ color: '#fff', margin: '12px 0 6px', fontSize: 16, fontWeight: 700 }}>{title}</h3>
        <p style={{ color: '#aaa', fontSize: 13, margin: '0 0 14px' }}>{desc}</p>
        <button style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', borderRadius: 8, padding: '8px 16px', cursor: 'pointer', fontSize: 14 }}>
          Book Now →
        </button>
      </div>
    </div>
  )
}

function New() {
  return (
    <div style={{ background: '#111', padding: '40px' }}>
      <h2 style={{ color: '#fff', fontWeight: 800, fontSize: 28, marginBottom: 24 }}>What's New</h2>
      <div style={{ display: 'flex', gap: 20, overflowX: 'auto', paddingBottom: 12 }}>
        {cards.map((c, i) => <Card key={i} {...c} />)}
      </div>
    </div>
  )
}

export default New;