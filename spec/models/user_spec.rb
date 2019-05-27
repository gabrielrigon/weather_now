require 'rails_helper'

RSpec.describe User, type: :model do
  it { expect(described_class.ancestors).to include ApplicationRecord }

  context "relationships" do
    it { is_expected.to have_many :favorites }
  end

  context "validations" do
    it { is_expected.to validate_presence_of :email }
    it { is_expected.to validate_presence_of :password }
  end

  context "when the attributes are correct" do
    let(:email) { Faker::Internet.email }
    let(:password) { Faker::Internet.password(8) }

    subject { described_class.new({ email: email, password: password }) }
    
    it { expect(subject).to be_valid }
  end

  context "when the password is unfilled" do
    let(:email) { Faker::Internet.email }
    let(:password) { nil }

    subject { described_class.new({ email: email, password: password }) }
    
    it { expect(subject).to be_invalid }
  end
end
