require 'rails_helper'

RSpec.describe Favorite, type: :model do
  it { expect(described_class.ancestors).to include ApplicationRecord }

  context "relationships" do
    it { is_expected.to belong_to :user }
  end

  context "validations" do
    it { is_expected.to validate_presence_of :city }
  end
end
