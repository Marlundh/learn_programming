class AddResetToUsers < ActiveRecord::Migration
  def change    # function defenition
    add_column :users, :reset_digest, :string
    add_column :users, :reset_sent_at, :datetime
  end
end