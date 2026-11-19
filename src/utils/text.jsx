import React from 'react';

/**
 * Ensures 'iOS' is always rendered with lowercase 'i' and capital 'OS',
 * even inside containers with CSS `uppercase`.
 */
export const renderWithIOS = (text) => {
  if (!text) return null;
  const str = String(text);
  const parts = str.split(/(ios)/gi);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    part.toLowerCase() === 'ios' ? (
      <span key={i} className="normal-case">
        iOS
      </span>
    ) : (
      part
    )
  );
};

export default renderWithIOS;
