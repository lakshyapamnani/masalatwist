import React, { useState, useEffect, useMemo } from 'react';
import { Users, MessageCircle, Search, Phone, UserPlus, Check, ExternalLink, Sparkles } from 'lucide-react';
import { CrmCustomer } from '../types';
import { buildWaMeUrl, formatWhatsAppPhone } from '../utils/whatsapp';

interface CrmScreenProps {
  customers: CrmCustomer[];
  offerMessage: string;
  onSaveOfferMessage: (message: string) => void;
  onSaveCustomer: (name: string, phone: string) => void;
  onUpdateCustomerMessage?: (customerId: string, customMessage: string) => void;
  variant?: 'desktop' | 'mobile';
}

const CrmScreen: React.FC<CrmScreenProps> = ({
  customers,
  offerMessage,
  onSaveOfferMessage,
  onSaveCustomer,
  onUpdateCustomerMessage,
  variant = 'desktop',
}) => {
  const [offerDraft, setOfferDraft] = useState(offerMessage);
  const [offerSaved, setOfferSaved] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [customMessageDrafts, setCustomMessageDrafts] = useState<Record<string, string>>({});

  useEffect(() => {
    setOfferDraft(offerMessage);
  }, [offerMessage]);

  const handleSaveOffer = () => {
    onSaveOfferMessage(offerDraft);
    setOfferSaved(true);
    setTimeout(() => setOfferSaved(false), 2000);
  };

  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhone.trim()) return;
    onSaveCustomer(newName.trim() || 'Guest', newPhone.trim());
    setNewName('');
    setNewPhone('');
    setShowAddForm(false);
  };

  const sortedCustomers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return [...customers]
      .filter((c) => {
        if (!q) return true;
        return (
          (c.name || '').toLowerCase().includes(q) ||
          (c.phone || '').toLowerCase().includes(q)
        );
      })
      .sort((a, b) => (b.lastOrderAt || b.createdAt || 0) - (a.lastOrderAt || a.createdAt || 0));
  }, [customers, searchQuery]);

  const isMobile = variant === 'mobile';

  return (
    <div className={`h-full overflow-y-auto bg-gray-50 ${isMobile ? 'p-3 pb-24' : 'p-6'}`}>
      <div className="max-w-6xl mx-auto space-y-5">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F57C00] flex items-center justify-center">
              <Users size={22} />
            </div>
            <div>
              <h1 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-black text-gray-900`}>
                Customer CRM
              </h1>
              <p className="text-xs text-gray-500 font-medium">
                {customers.length} {customers.length === 1 ? 'customer' : 'customers'} saved
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowAddForm((prev) => !prev)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#262626] hover:bg-black text-white text-xs font-black transition-all active:scale-95"
          >
            <UserPlus size={15} />
            Add Customer
          </button>
        </div>

        {/* Global Offer Message Editor */}
        <div className="bg-white rounded-2xl border border-orange-100 shadow-sm p-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <label className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#F57C00]">
              <Sparkles size={14} />
              Global WhatsApp Offer Message
            </label>
            <button
              type="button"
              onClick={handleSaveOffer}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-black transition-all ${offerSaved
                  ? 'bg-green-600 text-white'
                  : 'bg-[#F57C00] hover:bg-orange-600 text-white'
                }`}
            >
              <Check size={14} />
              {offerSaved ? 'Saved' : 'Save Offer'}
            </button>
          </div>
          <textarea
            value={offerDraft}
            onChange={(e) => setOfferDraft(e.target.value)}
            onBlur={handleSaveOffer}
            rows={3}
            placeholder="Enter global offer message to send on WhatsApp (e.g. Flat 15% OFF on your next order at Masala Twist!)..."
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F57C00] focus:bg-white resize-y"
          />
        </div>

        {/* Optional Add Customer Form */}
        {showAddForm && (
          <form onSubmit={handleAddCustomer} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Customer Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                required
                className="px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#F57C00] hover:bg-orange-600 text-white rounded-xl text-sm font-black transition-all"
              >
                Save Customer
              </button>
            </div>
          </form>
        )}

        {/* Search Bar */}
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search customers by name or phone number..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#F57C00]"
          />
        </div>

        {/* Customer Cards */}
        {sortedCustomers.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-10 text-center text-gray-400">
            <Users size={36} className="mx-auto mb-2 opacity-40" />
            <p className="font-bold text-sm text-gray-600">No customers saved yet</p>
            <p className="text-xs mt-1">
              Customer names and phone numbers from checkout will appear here automatically.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {sortedCustomers.map((customer) => {
              const waDirectUrl = buildWaMeUrl(customer.phone);
              const waOfferUrl = buildWaMeUrl(customer.phone, offerDraft);
              const personalMsg =
                customMessageDrafts[customer.id] !== undefined
                  ? customMessageDrafts[customer.id]
                  : (customer.customMessage || '');
              const waPersonalUrl = personalMsg.trim()
                ? buildWaMeUrl(customer.phone, personalMsg)
                : '';
              const formattedPhone = formatWhatsAppPhone(customer.phone);
              const visits = customer.totalOrders || 1;

              return (
                <div
                  key={customer.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 flex flex-col justify-between gap-3 hover:border-orange-300 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F57C00] font-black flex items-center justify-center shrink-0">
                          {(customer.name || 'G').charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-black text-gray-900 text-sm truncate">
                            {customer.name || 'Guest'}
                          </h3>
                          <div className="flex items-center gap-1 text-xs font-bold text-gray-600 mt-0.5">
                            <Phone size={12} className="text-gray-400 shrink-0" />
                            <span>{customer.phone}</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-black bg-orange-50 text-[#F57C00] px-2.5 py-1 rounded-full shrink-0">
                        {visits} {visits === 1 ? 'Visit' : 'Visits'}
                      </span>
                    </div>

                    {waDirectUrl && (
                      <a
                        href={waDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:underline break-all"
                      >
                        <ExternalLink size={11} />
                        wa.me/{formattedPhone}
                      </a>
                    )}

                    <div className="mt-3">
                      <label className="block text-[10px] font-black uppercase tracking-wider text-gray-400 mb-1">
                        Personalised Return Message
                      </label>
                      <textarea
                        rows={2}
                        value={personalMsg}
                        onChange={(e) =>
                          setCustomMessageDrafts((prev) => ({
                            ...prev,
                            [customer.id]: e.target.value,
                          }))
                        }
                        onBlur={() => {
                          if (customMessageDrafts[customer.id] !== undefined) {
                            onUpdateCustomerMessage?.(customer.id, customMessageDrafts[customer.id]);
                          }
                        }}
                        placeholder={`e.g. Hi ${customer.name || 'Guest'}, we miss you at Masala Twist! Show this for 10% off...`}
                        className="w-full px-2.5 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F57C00] focus:bg-white resize-y"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {personalMsg.trim() && (
                      <a
                        href={waPersonalUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          if (!waPersonalUrl) e.preventDefault();
                          else onUpdateCustomerMessage?.(customer.id, personalMsg);
                        }}
                        className="w-full py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 bg-[#F57C00] hover:bg-orange-600 text-white shadow-sm"
                      >
                        <MessageCircle size={15} />
                        Send Personalised Message
                      </a>
                    )}
                    <a
                      href={waOfferUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (!waOfferUrl) e.preventDefault();
                      }}
                      className={`w-full py-2.5 px-3 rounded-xl font-black text-xs flex items-center justify-center gap-1.5 transition-all active:scale-95 ${waOfferUrl
                          ? 'bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-sm'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                      <MessageCircle size={15} />
                      Send Global Offer
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CrmScreen;

