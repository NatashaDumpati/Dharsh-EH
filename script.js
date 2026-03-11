const MOCK_DOCUMENTS = {
  "D-1001-01": { id: "D-1001-01", patientId: "1001", title: "Annual Physical Report", date: "2024-01-15", type: "Lab Report", content: "Patient is in good health. Blood pressure is stable. Recommended daily exercise." },
  "D-1002-01": { id: "D-1002-01", patientId: "1002", title: "Diabetes Screening", date: "2023-12-10", type: "Diagnostic", content: "HbA1c levels are elevated. Patient advised to follow a strict low-sugar diet." },
  "D-1003-01": { id: "D-1003-01", patientId: "1003", title: "Cardiology Consultation", date: "2024-02-01", type: "Specialist", content: "Mild hypertension noted. Prescribed Lisinopril 10mg." },
  "D-1004-01": { id: "D-1004-01", patientId: "1004", title: "Orthopedic Evaluation", date: "2024-02-15", type: "Specialist", content: "Patient reports chronic lower back pain. MRI suggests mild disc protrusion at L4-L5." },
  "D-1005-01": { id: "D-1005-01", patientId: "1005", title: "Dermatology Skin Map", date: "2024-01-20", type: "Diagnostic", content: "Multiple atypical nevi noted on back. Biopsy recommended for lesion on left shoulder." },
  "D-1006-01": { id: "D-1006-01", patientId: "1006", title: "Pulmonary Function Test", date: "2024-02-10", type: "Lab Report", content: "FEV1/FVC ratio within normal limits. No evidence of obstructive lung disease." },
  "D-1007-01": { id: "D-1007-01", patientId: "1007", title: "Ophthalmology Exam", date: "2024-03-01", type: "Specialist", content: "Visual acuity 20/40 OU. Early signs of macular degeneration noted." },
  "D-1008-01": { id: "D-1008-01", patientId: "1008", title: "Gastroenterology Report", date: "2023-11-15", type: "Diagnostic", content: "Endoscopy reveals mild gastritis. Recommended H. pylori testing." },
  "D-1009-01": { id: "D-1009-01", patientId: "1009", title: "Neurology Assessment", date: "2024-02-28", type: "Specialist", content: "Patient reports frequent migraines. Prescribed Sumatriptan for acute episodes." },
  "D-1010-01": { id: "D-1010-01", patientId: "1010", title: "Urology Consultation", date: "2024-01-05", type: "Specialist", content: "PSA levels stable. No further intervention required at this time." }
};

const MOCK_USERS = {
  "alice@example.com": { id: "1001", email: "alice@example.com", password: "password123", name: "Alice Johnson" },
  "bob@example.com": { id: "1002", email: "bob@example.com", password: "password123", name: "Bob Miller" },
  "charlie@example.com": { id: "1003", email: "charlie@example.com", password: "password123", name: "Charlie Davis" },
  "david@example.com": { id: "1004", email: "david@example.com", password: "password123", name: "David Wilson" },
  "eva@example.com": { id: "1005", email: "eva@example.com", password: "password123", name: "Eva Martinez" },
  "frank@example.com": { id: "1006", email: "frank@example.com", password: "password123", name: "Frank Thompson" },
  "grace@example.com": { id: "1007", email: "grace@example.com", password: "password123", name: "Grace Lee" },
  "henry@example.com": { id: "1008", email: "henry@example.com", password: "password123", name: "Henry Garcia" },
  "ivy@example.com": { id: "1009", email: "ivy@example.com", password: "password123", name: "Ivy Chen" },
  "jack@example.com": { id: "1010", email: "jack@example.com", password: "password123", name: "Jack Robinson" }
};

const MOCK_PATIENTS = {
  "1001": { id: "1001", name: "Alice Johnson", dob: "1988-05-14", bloodType: "A+", diagnosis: "Seasonal Allergies", medications: ["Loratadine", "Fluticasone"], lastVisit: "2024-01-15", doctor: "Dr. Smith", ssn: "XXX-XX-1234" },
  "1002": { id: "1002", name: "Bob Miller", dob: "1975-11-22", bloodType: "O-", diagnosis: "Type 2 Diabetes", medications: ["Metformin", "Insulin"], lastVisit: "2023-12-10", doctor: "Dr. Roberts", ssn: "XXX-XX-5678" },
  "1003": { id: "1003", name: "Charlie Davis", dob: "1992-03-30", bloodType: "B+", diagnosis: "Hypertension", medications: ["Lisinopril"], lastVisit: "2024-02-01", doctor: "Dr. Smith", ssn: "XXX-XX-9012" },
  "1004": { id: "1004", name: "David Wilson", dob: "1980-07-12", bloodType: "AB+", diagnosis: "Chronic Back Pain", medications: ["Ibuprofen", "Cyclobenzaprine"], lastVisit: "2024-02-15", doctor: "Dr. Adams", ssn: "XXX-XX-3456" },
  "1005": { id: "1005", name: "Eva Martinez", dob: "1995-12-05", bloodType: "O+", diagnosis: "Eczema", medications: ["Hydrocortisone Cream"], lastVisit: "2024-01-20", doctor: "Dr. Chen", ssn: "XXX-XX-7890" },
  "1006": { id: "1006", name: "Frank Thompson", dob: "1962-09-18", bloodType: "A-", diagnosis: "Asthma", medications: ["Albuterol", "Montelukast"], lastVisit: "2024-02-10", doctor: "Dr. Roberts", ssn: "XXX-XX-2345" },
  "1007": { id: "1007", name: "Grace Lee", dob: "1970-04-25", bloodType: "B-", diagnosis: "Glaucoma", medications: ["Latanoprost Drops"], lastVisit: "2024-03-01", doctor: "Dr. Wilson", ssn: "XXX-XX-6789" },
  "1008": { id: "1008", name: "Henry Garcia", dob: "1985-11-30", bloodType: "O+", diagnosis: "Acid Reflux", medications: ["Omeprazole"], lastVisit: "2023-11-15", doctor: "Dr. Adams", ssn: "XXX-XX-0123" },
  "1009": { id: "1009", name: "Ivy Chen", dob: "1990-01-10", bloodType: "AB-", diagnosis: "Migraines", medications: ["Sumatriptan", "Magnesium"], lastVisit: "2024-02-28", doctor: "Dr. Chen", ssn: "XXX-XX-4567" },
  "1010": { id: "1010", name: "Jack Robinson", dob: "1955-06-22", bloodType: "A+", diagnosis: "Hyperlipidemia", medications: ["Atorvastatin"], lastVisit: "2024-01-05", doctor: "Dr. Roberts", ssn: "XXX-XX-8901" },
  "1337": { id: "1337", name: "Admin / System Logs", dob: "N/A", bloodType: "N/A", diagnosis: "SYSTEM OVERRIDE", medications: ["DEBUG_MODE_ENABLED"], lastVisit: "2024-03-02", doctor: "SYSTEM", ssn: "SECRET-ROOT-KEY-9999" }
};

// Initialize state from localStorage if available
let savedUser = null;
try {
    const raw = localStorage.getItem('medivault_user');
    if (raw) savedUser = JSON.parse(raw);
} catch (e) {
    console.error("Session recovery failed", e);
    localStorage.removeItem('medivault_user');
}

const urlParams = new URLSearchParams(window.location.search);
const initialId = urlParams.get('id');
const initialDocId = urlParams.get('doc_id');
const initialView = urlParams.get('view');

let state = {
    isLoggedIn: !!savedUser,
    user: savedUser,
    view: savedUser ? 'dashboard' : 'login',
    viewedId: initialId,
    viewedDocId: initialDocId,
    showSSN: false
};

// Sync view with URL parameters if logged in
if (state.isLoggedIn) {
    if (initialDocId) {
        state.view = 'documents';
        state.viewedDocId = initialDocId;
    } else if (initialId) {
        state.view = 'records';
        state.viewedId = initialId;
    } else if (initialView) {
        state.view = initialView;
    }
} else {
    // If not logged in, only allow login or signup views
    state.view = initialView === 'signup' ? 'signup' : 'login';
}

function render() {
    const app = document.getElementById('app');
    if (!state.isLoggedIn) {
        app.innerHTML = renderAuth();
    } else {
        app.innerHTML = `
            <div class="min-h-screen bg-zinc-50 flex">
                ${renderSidebar()}
                <div class="flex-1 flex flex-col min-w-0">
                    ${renderHeader()}
                    <main class="flex-1 p-4 sm:p-8 overflow-y-auto">
                        ${renderMainContent()}
                    </main>
                </div>
            </div>
        `;
    }
    lucide.createIcons();
    if (state.view === 'dashboard' && state.isLoggedIn) {
        renderChart();
    }
}

function renderAuth() {
    return `
        <div class="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
            <div class="bg-white w-full max-w-md rounded-2xl shadow-xl border border-zinc-200 overflow-hidden">
                <div class="bg-emerald-600 p-8 text-center">
                    <div class="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <i data-lucide="shield-check" class="text-white w-8 h-8"></i>
                    </div>
                    <h1 class="text-2xl font-bold text-white">MediVault Portal</h1>
                    <p class="text-emerald-100 text-sm mt-1">Secure Healthcare Information System</p>
                </div>
                <div class="p-8">
                    <div class="flex border-b border-zinc-100 mb-8">
                        <button onclick="setView('login')" class="flex-1 pb-4 text-sm font-semibold ${state.view === 'login' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-zinc-400'}">Sign In</button>
                        <button onclick="setView('signup')" class="flex-1 pb-4 text-sm font-semibold ${state.view === 'signup' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-zinc-400'}">Create Account</button>
                    </div>
                    <form onsubmit="handleAuth(event)" class="space-y-5">
                        ${state.view === 'signup' ? `
                            <div>
                                <label class="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1.5 ml-1">Full Name</label>
                                <div class="relative">
                                    <i data-lucide="user" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4"></i>
                                    <input type="text" id="name" required placeholder="John Doe" class="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm">
                                </div>
                            </div>
                        ` : ''}
                        <div>
                            <label class="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1.5 ml-1">Email Address</label>
                            <div class="relative">
                                <i data-lucide="mail" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4"></i>
                                <input type="email" id="email" required placeholder="name@company.com" class="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm">
                            </div>
                        </div>
                        <div>
                            <label class="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1.5 ml-1">Password</label>
                            <div class="relative">
                                <i data-lucide="key" class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4"></i>
                                <input type="password" id="password" required placeholder="••••••••" class="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm">
                            </div>
                        </div>
                        <div id="auth-error" class="text-red-500 text-xs font-medium text-center hidden"></div>
                        <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all active:scale-[0.98]">
                            ${state.view === 'login' ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function renderSidebar() {
    return `
        <aside class="hidden lg:flex w-64 bg-white border-r border-zinc-200 flex-col sticky top-0 h-screen">
            <div class="p-6 border-b border-zinc-100 flex items-center gap-3">
                <div class="bg-emerald-600 p-2 rounded-lg">
                    <i data-lucide="activity" class="text-white w-5 h-5"></i>
                </div>
                <span class="font-bold text-lg tracking-tight text-zinc-800">MediVault</span>
            </div>
            <nav class="flex-1 p-4 space-y-1">
                <button onclick="navigateTo('dashboard')" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${state.view === 'dashboard' ? 'sidebar-active' : 'sidebar-inactive'}">
                    <i data-lucide="layout-dashboard" size="18"></i> Dashboard
                </button>
                <button onclick="navigateToRecords('${state.user.id}')" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${state.view === 'records' ? 'sidebar-active' : 'sidebar-inactive'}">
                    <i data-lucide="clipboard-list" size="18"></i> Medical Records
                </button>
                <button onclick="navigateTo('documents')" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${state.view === 'documents' ? 'sidebar-active' : 'sidebar-inactive'}">
                    <i data-lucide="file-search" size="18"></i> Documents
                </button>
                <button onclick="navigateTo('profile')" class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${state.view === 'profile' ? 'sidebar-active' : 'sidebar-inactive'}">
                    <i data-lucide="user-circle" size="18"></i> My Profile
                </button>
            </nav>
            <div class="p-4 border-t border-zinc-100">
                <button onclick="handleLogout()" class="w-full flex items-center gap-3 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all">
                    <i data-lucide="log-out" size="18"></i> Sign Out
                </button>
            </div>
        </aside>
    `;
}

function renderHeader() {
    const isIdor = state.isLoggedIn && state.viewedId && state.viewedId !== state.user.id;
    return `
        <header class="bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
            <div class="flex items-center gap-4">
                <h2 class="font-bold text-lg text-zinc-900 capitalize">${state.view}</h2>
                ${isIdor ? `<span class="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-full animate-pulse border border-amber-200">UNAUTHORIZED ACCESS DETECTED</span>` : ''}
            </div>
            <div class="flex items-center gap-4">
                <div class="hidden md:flex flex-col items-end mr-2">
                    <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Logged in as</span>
                    <span class="text-xs font-semibold text-emerald-600">${state.user.name}</span>
                </div>
                <div class="hidden sm:flex items-center bg-zinc-100 rounded-full px-4 py-1.5 border border-zinc-200">
                    <i data-lucide="search" size="14" class="text-zinc-400 mr-2"></i>
                    <input type="text" placeholder="Search patients..." class="bg-transparent border-none outline-none text-xs w-32 focus:w-48 transition-all">
                </div>
                <i data-lucide="bell" size="20" class="text-zinc-400 cursor-pointer hover:text-zinc-600"></i>
            </div>
        </header>
    `;
}

function renderMainContent() {
    switch (state.view) {
        case 'dashboard': return renderDashboard();
        case 'records': return renderRecords();
        case 'documents': return renderDocuments();
        case 'profile': return renderProfile();
        default: return '';
    }
}

function renderDashboard() {
    const userDocs = Object.values(MOCK_DOCUMENTS).filter(d => d.patientId === state.user.id);
    return `
        <div class="max-w-5xl mx-auto space-y-8">
            <div>
                <h1 class="text-2xl font-bold text-zinc-900">Welcome back, ${state.user.name.split(' ')[0]}</h1>
                <p class="text-zinc-500 text-sm">Your health metrics are looking stable today.</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="font-bold text-zinc-900 flex items-center gap-2"><i data-lucide="trending-up" size="18" class="text-emerald-500"></i> Health Trends</h3>
                    </div>
                    <canvas id="healthChart" height="150"></canvas>
                </div>
                <div class="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                    <h3 class="font-bold text-zinc-900 mb-4 flex items-center gap-2"><i data-lucide="clock" size="18" class="text-emerald-500"></i> Upcoming</h3>
                    <div class="space-y-4">
                        <div class="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                            <p class="text-sm font-bold text-zinc-900">Dental Cleaning</p>
                            <p class="text-xs text-zinc-500 mt-1">Tomorrow, 10:00 AM</p>
                            <p class="text-[10px] font-bold text-emerald-600 mt-2 uppercase tracking-widest">Dr. Sarah Lee</p>
                        </div>
                        <div class="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                            <p class="text-sm font-bold text-zinc-900">Eye Exam</p>
                            <p class="text-xs text-zinc-500 mt-1">Mar 15, 02:30 PM</p>
                            <p class="text-[10px] font-bold text-emerald-600 mt-2 uppercase tracking-widest">Dr. James Wilson</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                <div class="px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
                    <h3 class="font-bold text-zinc-900">Recent Documents</h3>
                    <button onclick="navigateTo('documents')" class="text-xs text-emerald-600 font-bold hover:underline">View All</button>
                </div>
                <div class="divide-y divide-zinc-50">
                    ${userDocs.map(doc => `
                        <div onclick="navigateToDocument('${doc.id}')" class="px-6 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors cursor-pointer">
                            <div class="flex items-center gap-4">
                                <div class="bg-zinc-100 p-2 rounded-lg text-zinc-500"><i data-lucide="file-text" size="18"></i></div>
                                <div>
                                    <p class="text-sm font-semibold text-zinc-900">${doc.title}</p>
                                    <p class="text-xs text-zinc-500">${doc.date}</p>
                                </div>
                            </div>
                            <i data-lucide="download" size="16" class="text-zinc-300"></i>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderRecords() {
    const patient = MOCK_PATIENTS[state.viewedId];
    if (!patient) return `<div class="py-20 text-center"><h3 class="text-zinc-500">Record Not Found</h3></div>`;
    return `
        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
                <div class="bg-zinc-50 px-8 py-6 border-b border-zinc-200 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">${patient.name[0]}</div>
                        <div>
                            <h2 class="text-xl font-bold text-zinc-900">${patient.name}</h2>
                            <p class="text-xs text-zinc-500">Patient Record # ${patient.id}</p>
                        </div>
                    </div>
                    <div class="bg-white px-3 py-1.5 rounded-lg border border-zinc-200 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Confidential</div>
                </div>
                <div class="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-6">
                        <div><label class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Date of Birth</label><p class="text-sm text-zinc-900 font-medium">${patient.dob}</p></div>
                        <div><label class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-1">Blood Type</label><p class="text-sm text-zinc-900 font-medium">${patient.bloodType}</p></div>
                        <div class="p-4 bg-red-50 rounded-xl border border-red-100">
                            <div class="flex items-center justify-between mb-1">
                                <label class="text-[10px] font-bold text-red-400 uppercase tracking-widest">SSN</label>
                                <button onclick="toggleSSN()" class="text-red-400 hover:text-red-600"><i data-lucide="${state.showSSN ? 'eye-off' : 'eye'}" size="14"></i></button>
                            </div>
                            <p class="text-sm font-mono text-red-700 font-bold">${state.showSSN ? patient.ssn : 'XXX-XX-XXXX'}</p>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                            <label class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">Current Diagnosis</label>
                            <div class="flex items-center gap-2 text-zinc-900 font-semibold"><i data-lucide="file-text" size="16" class="text-emerald-500"></i> ${patient.diagnosis}</div>
                        </div>
                        <div>
                            <label class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-2">Medications</label>
                            <div class="flex flex-wrap gap-2">${patient.medications.map(med => `<span class="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-100">${med}</span>`).join('')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderDocuments() {
    if (state.viewedDocId) {
        const doc = MOCK_DOCUMENTS[state.viewedDocId];
        if (!doc) return `<div class="py-20 text-center"><h3 class="text-zinc-500">Document Not Found</h3></div>`;
        return `
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                    <div class="p-6 border-b border-zinc-100 flex items-center justify-between">
                        <button onclick="navigateTo('documents')" class="text-xs text-emerald-600 font-bold hover:underline flex items-center gap-1">← Back to List</button>
                        <span class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Document ID: ${doc.id}</span>
                    </div>
                    <div class="p-8">
                        <h2 class="text-2xl font-bold text-zinc-900 mb-2">${doc.title}</h2>
                        <p class="text-xs text-zinc-500 mb-8">${doc.date} • ${doc.type}</p>
                        <div class="prose prose-sm max-w-none text-zinc-700 leading-relaxed bg-zinc-50 p-6 rounded-xl border border-zinc-100">
                            ${doc.content}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    const userDocs = Object.values(MOCK_DOCUMENTS).filter(d => d.patientId === state.user.id);
    return `
        <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                <div class="p-6 border-b border-zinc-100"><h3 class="font-bold text-zinc-900">Your Documents</h3></div>
                <div class="divide-y divide-zinc-50">
                    ${userDocs.map(doc => `
                        <div onclick="navigateToDocument('${doc.id}')" class="px-6 py-4 flex items-center justify-between hover:bg-zinc-50 transition-colors cursor-pointer">
                            <div class="flex items-center gap-4">
                                <div class="bg-zinc-100 p-2 rounded-lg text-zinc-500"><i data-lucide="file-text" size="18"></i></div>
                                <div>
                                    <p class="text-sm font-semibold text-zinc-900">${doc.title}</p>
                                    <p class="text-xs text-zinc-500">${doc.date}</p>
                                </div>
                            </div>
                            <i data-lucide="chevron-right" size="16" class="text-zinc-300"></i>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderProfile() {
    return `
        <div class="max-w-2xl mx-auto">
            <div class="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
                <div class="h-32 bg-emerald-600"></div>
                <div class="px-8 pb-8">
                    <div class="relative -mt-12 mb-6">
                        <div class="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg">
                            <div class="w-full h-full rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-3xl">${state.user.name[0]}</div>
                        </div>
                    </div>
                    <h1 class="text-2xl font-bold text-zinc-900">${state.user.name}</h1>
                    <p class="text-zinc-500 text-sm">${state.user.email}</p>
                    <div class="mt-8 space-y-6">
                        <div class="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-between">
                            <div><p class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Account ID</p><p class="text-sm font-mono text-zinc-900 font-bold">${state.user.id}</p></div>
                            <div class="text-right"><p class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Status</p><span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Verified</span></div>
                        </div>
                        <div class="space-y-4">
                            <h3 class="font-bold text-zinc-900">Security Settings</h3>
                            <div class="flex items-center justify-between p-4 border border-zinc-100 rounded-xl">
                                <div class="flex items-center gap-3"><i data-lucide="lock" size="18" class="text-zinc-400"></i><div><p class="text-sm font-semibold">Two-Factor Authentication</p><p class="text-xs text-zinc-500">Add an extra layer of security</p></div></div>
                                <div class="w-10 h-5 bg-zinc-200 rounded-full relative cursor-pointer"><div class="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderChart() {
    const ctx = document.getElementById('healthChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Heart Rate',
                data: [68, 72, 70, 75, 71, 69, 72],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: false, grid: { display: false } },
                x: { grid: { display: false } }
            }
        }
    });
}

// Handlers
function setView(view) {
    state.view = view;
    render();
}

function handleAuth(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name')?.value;

    if (state.view === 'login') {
        const user = MOCK_USERS[email];
        if (user && user.password === password) {
            state.isLoggedIn = true;
            state.user = user;
            localStorage.setItem('medivault_user', JSON.stringify(user));
            // Preserve intended destination from URL - go straight to record/doc if id was in URL
            const params = new URLSearchParams(window.location.search);
            const targetDocId = params.get('doc_id');
            const targetId = params.get('id');
            if (targetDocId) {
                navigateToDocument(targetDocId);
            } else if (targetId) {
                navigateToRecords(targetId);
            } else if (params.get('view')) {
                navigateTo(params.get('view'));
            } else {
                navigateTo('dashboard');
            }
        } else {
            const err = document.getElementById('auth-error');
            err.innerText = 'Invalid email or password';
            err.classList.remove('hidden');
        }
    } else {
        state.isLoggedIn = true;
        state.user = { id: "1004", email, name, password };
        localStorage.setItem('medivault_user', JSON.stringify(state.user));
        const params = new URLSearchParams(window.location.search);
        const targetDocId = params.get('doc_id');
        const targetId = params.get('id');
        if (targetDocId) {
            navigateToDocument(targetDocId);
        } else if (targetId) {
            navigateToRecords(targetId);
        } else if (params.get('view')) {
            navigateTo(params.get('view'));
        } else {
            navigateTo('dashboard');
        }
    }
}

function handleLogout() {
    state.isLoggedIn = false;
    state.user = null;
    state.view = 'login';
    state.viewedId = null;
    state.viewedDocId = null;
    localStorage.removeItem('medivault_user');
    updateUrl('login');
    render();
}

function navigateTo(view) {
    state.view = view;
    state.viewedId = null;
    state.viewedDocId = null;
    updateUrl(view);
    render();
}

function navigateToRecords(id) {
    state.view = 'records';
    state.viewedId = id;
    state.viewedDocId = null;
    updateUrl('records', id);
    render();
}

function navigateToDocument(docId) {
    state.view = 'documents';
    state.viewedDocId = docId;
    state.viewedId = null;
    updateUrl('documents', docId, 'doc');
    render();
}

function toggleSSN() {
    state.showSSN = !state.showSSN;
    render();
}

function updateUrl(view, id = null, type = 'id') {
    const url = new URL(window.location.href);
    url.searchParams.delete('id');
    url.searchParams.delete('doc_id');
    url.searchParams.delete('view');
    if (id) {
        url.searchParams.set(type === 'id' ? 'id' : 'doc_id', id);
    } else {
        url.searchParams.set('view', view);
    }
    window.history.pushState({}, '', url.toString());
}

// Initial Load
window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const docId = params.get('doc_id');
    const view = params.get('view');

    if (state.isLoggedIn) {
        if (docId) {
            state.viewedDocId = docId;
            state.view = 'documents';
        } else if (id) {
            state.viewedId = id;
            state.view = 'records';
        } else if (view) {
            state.view = view;
        }
    }
    render();
});

render();
