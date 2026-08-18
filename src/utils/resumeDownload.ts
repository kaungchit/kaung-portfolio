import { developerProfile, experienceData, skillCategories } from '../data/portfolioData';

/**
 * Generates an ATS-optimized, high-fidelity printable HTML document
 * and triggers immediate browser print-to-PDF / direct download dialog.
 */
export function downloadResumePdf() {
  const printWindow = window.open('', '_blank', 'width=850,height=1100');
  if (!printWindow) {
    // Fallback: If popup is blocked, trigger plain text download or window print directly
    window.print();
    return;
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${developerProfile.name} - Resume</title>
  <style>
    @page {
      margin: 18mm 16mm;
      size: A4 portrait;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #1e293b;
    }
    body {
      background: #ffffff;
      font-size: 13px;
      line-height: 1.5;
      padding: 24px;
    }
    .header {
      border-bottom: 2px solid #0284c7;
      padding-bottom: 14px;
      margin-bottom: 16px;
    }
    .name {
      font-size: 26px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      color: #0284c7;
      margin-top: 2px;
    }
    .contact-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 12px;
      color: #475569;
      margin-top: 8px;
    }
    .contact-item a {
      color: #0284c7;
      text-decoration: none;
    }
    .section-title {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 4px;
      margin-top: 18px;
      margin-bottom: 10px;
    }
    .summary-text {
      color: #334155;
      font-size: 12.5px;
      line-height: 1.55;
    }
    .exp-item {
      margin-bottom: 14px;
      page-break-inside: avoid;
    }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }
    .exp-role {
      font-weight: 700;
      font-size: 13.5px;
      color: #0f172a;
    }
    .exp-company {
      color: #0284c7;
      font-weight: 600;
    }
    .exp-period {
      font-size: 11.5px;
      font-weight: 600;
      color: #64748b;
    }
    .exp-location {
      font-size: 11.5px;
      color: #64748b;
      margin-bottom: 4px;
    }
    .exp-bullets {
      margin-left: 18px;
      color: #334155;
      font-size: 12px;
      line-height: 1.45;
    }
    .exp-bullets li {
      margin-bottom: 3px;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 8px 16px;
      font-size: 12px;
    }
    .skill-cat-title {
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 2px;
    }
    .skill-list {
      color: #475569;
    }
    .edu-item {
      margin-bottom: 8px;
    }
    .edu-header {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      color: #0f172a;
    }
    .edu-inst {
      color: #475569;
      font-size: 12px;
    }
    @media print {
      body {
        padding: 0;
      }
      .no-print {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">${developerProfile.name}</div>
    <div class="title">${developerProfile.title}</div>
    <div class="contact-bar">
      <div class="contact-item">📧 <a href="mailto:${developerProfile.socials.email}">${developerProfile.socials.email}</a></div>
      <div class="contact-item">📱 ${developerProfile.socials.phone} (WhatsApp)</div>
      <div class="contact-item">📍 ${developerProfile.location}</div>
      <div class="contact-item">🐙 <a href="${developerProfile.socials.github}">${developerProfile.socials.github}</a></div>
      <div class="contact-item">💼 <a href="${developerProfile.socials.linkedin}">LinkedIn</a></div>
    </div>
  </div>

  <div>
    <div class="section-title">Professional Summary</div>
    <p class="summary-text">
      ${developerProfile.bioParagraphs.join(' ')}
    </p>
  </div>

  <div>
    <div class="section-title">Technical Expertise</div>
    <div class="skills-grid">
      ${skillCategories.map(cat => `
        <div>
          <div class="skill-cat-title">${cat.title}:</div>
          <div class="skill-list">${cat.skills.map(s => s.name).join(', ')}</div>
        </div>
      `).join('')}
    </div>
  </div>

  <div>
    <div class="section-title">Work Experience</div>
    ${experienceData.map(exp => `
      <div class="exp-item">
        <div class="exp-header">
          <div>
            <span class="exp-role">${exp.role}</span>
            <span class="exp-company"> @ ${exp.company}</span>
          </div>
          <span class="exp-period">${exp.period}</span>
        </div>
        <div class="exp-location">${exp.location} ${exp.isRemote ? '• Remote International Team' : ''}</div>
        <ul class="exp-bullets">
          ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
    `).join('')}
  </div>

  <div>
    <div class="section-title">Education & Certifications</div>
    ${developerProfile.education.map(edu => `
      <div class="edu-item">
        <div class="edu-header">
          <span>${edu.degree}</span>
          <span class="exp-period">${edu.period}</span>
        </div>
        <div class="edu-inst">${edu.institution} — ${edu.details}</div>
      </div>
    `).join('')}
  </div>

  <div>
    <div class="section-title">Languages</div>
    <div class="contact-bar">
      ${developerProfile.languages.map(l => `<div><strong>${l.name}:</strong> ${l.level}</div>`).join('')}
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    };
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}

/**
 * Downloads plain-text resume file for instant offline use.
 */
export function downloadResumePlainText() {
  const textContent = `=====================================================
${developerProfile.name.toUpperCase()} - ${developerProfile.title.toUpperCase()}
=====================================================
Email: ${developerProfile.socials.email}
Phone: ${developerProfile.socials.phone} (WhatsApp)
Location: ${developerProfile.location}
GitHub: ${developerProfile.socials.github}
LinkedIn: ${developerProfile.socials.linkedin}

-----------------------------------------------------
PROFESSIONAL SUMMARY
-----------------------------------------------------
${developerProfile.bioParagraphs.join('\n\n')}

-----------------------------------------------------
TECHNICAL EXPERTISE
-----------------------------------------------------
${skillCategories.map(cat => `${cat.title.toUpperCase()}:\n  ${cat.skills.map(s => s.name).join(', ')}`).join('\n\n')}

-----------------------------------------------------
PROFESSIONAL EXPERIENCE
-----------------------------------------------------
${experienceData.map(exp => `
[${exp.period}] ${exp.role} @ ${exp.company} (${exp.location})
${exp.summary}
Key Responsibilities:
${exp.responsibilities.map(r => `  - ${r}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

-----------------------------------------------------
EDUCATION & CERTIFICATIONS
-----------------------------------------------------
${developerProfile.education.map(edu => `
- ${edu.degree} | ${edu.institution} (${edu.period})
  ${edu.details}
`).join('\n')}

-----------------------------------------------------
LANGUAGES
-----------------------------------------------------
${developerProfile.languages.map(l => `- ${l.name}: ${l.level}`).join('\n')}
`;

  const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Kaung_Chit_San_Resume.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
